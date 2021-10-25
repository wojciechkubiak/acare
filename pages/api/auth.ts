import jsonwebtoken from "jsonwebtoken";
import prisma from "../../lib/prisma";

export interface Token {
    authToken: string;
}

export interface  AuthResponse {
    id: number,
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    userId: string,
    iat: number,
    exp: number
}

const authUser = async (req: any, res: any) => {
    const { refresh } = req.body;
    const token: Token = {
        authToken: ''
    }

    return new Promise((resolve) => {
        const authToken = jsonwebtoken.decode(
            refresh
        );
        resolve(authToken);
    }).then((data: AuthResponse) => {
        return new Promise((resolve, reject) => {
            const email = data.email;
            if(email) {
                prisma.user
                    .findUnique({
                        where: {
                            email: email
                        },
                    })
                    .then((result) => {
                        if (result?.password) {
                            token.authToken = jsonwebtoken.sign(
                                result,
                                process.env.SECRET_KEY,
                                {
                                    expiresIn: "12h",
                                }
                            );

                            res.status(200).json(token);
                            return resolve({token});
                        } else {
                            res.status(405).send(token).end();
                            return reject(token);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        res.status(500).send(token).end();
                        return reject(token);
                    });
            }
        })
    }).catch(error => console.log(error));
};

export default authUser;
