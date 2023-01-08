import { Request, Response } from "express";
import generateToken from "../../Utils/security/generateToken";
import prismaClient from "../../Utils/prisma";
import comparePassword from "../../Utils/security/comparePassword";

const findUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw "No such user was found";
    } else if (!(await comparePassword(password, user.password))) {
      throw "Either the email or the password are wrong";
    }
    res.json({
      user,
      token: generateToken(user),
    });
  } catch (error) {
    res.json({ message: error });
  }
};

export default findUser;
