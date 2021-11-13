import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegisterSuccess {
  isCreated: boolean;
}

const registerUser = async (req: any, res: any) => {
  const { firstName, lastName, email, password } = req.body;
  const userId = uuidv4();
  const _result: RegisterSuccess = { isCreated: false };

  return new Promise(async (resolve, reject) => {
    const userExists = await prisma.user
      .count({
        where: {
          email: email,
        },
      })
      .then((cnt) => cnt);

    if (!userExists) {
      if (firstName && lastName && email && password) {
        bcrypt.hash(password, 10, async (error, hash) => {
          if (error) {
            res.status(405).send(_result)?.end();
            return resolve(_result);
          }

          prisma.user
            .create({
              data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash,
                userId: userId,
              },
            })
            .then((result) => {
              _result.isCreated = true;
              res.status(200).send(_result);
              return resolve(_result);
            })
            .catch((error) => {
              console.log(error);
              res.status(500).send(_result)?.end();
              return resolve(_result);
            });
        });
      } else {
        res.status(405).send(_result)?.end();
        return resolve(_result);
      }
    } else {
      res.status(400).send(_result)?.end();
      return resolve(_result);
    }
  });
};

export default registerUser;
