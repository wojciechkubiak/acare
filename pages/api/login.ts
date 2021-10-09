import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import prisma from "../../lib/prisma";

export interface LoginData {
  email: string;
  password: string;
}

export interface Tokens {
  isLoggedIn: boolean;
  isUser: boolean;
  authToken: string;
  refreshToken: string;
}

const loginUser = async (req: any, res: any) => {
  const { email, password } = req.body;

  const _result: Tokens = {
    isLoggedIn: false,
    isUser: false,
    authToken: "",
    refreshToken: "",
  };

  return new Promise((resolve) => {
    if (email && password) {
      prisma.user
        .findUnique({
          where: {
            email: email,
          },
        })
        .then((result) => {
          if (result) {
            console.log(result);
            if (bcrypt.compareSync(password, result.password)) {
              console.log("hashed");
              const refreshToken = jsonwebtoken.sign(
                result,
                process.env.SECRET_KEY,
                {
                  expiresIn: "12h",
                }
              );
              const authToken = jsonwebtoken.sign(
                result,
                process.env.SECRET_KEY,
                {
                  expiresIn: "1h",
                }
              );
              _result.isLoggedIn = true;
              _result.isUser = true;
              _result.authToken = authToken;
              _result.refreshToken = refreshToken;

              res.status(200).json(_result);
              return resolve(_result);
            }
          } else {
            res.status(405).send().end();
            return resolve(_result);
          }
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send(_result).end();
          return resolve(_result);
        });
    } else {
      res.status(405).send(_result).end();
      return resolve(false);
    }
  });
};

export default loginUser;
