import { Request, Response } from "express";
import prismaClient from "../../Utils/prisma";
import hashPassword from "../../Utils/security/hashPassword";
import generateToken from "../../Utils/security/generateToken";

const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: await hashPassword(password),
      },
    });

    res.json({ user, token: generateToken(user) });
  } catch (error) {
    res.json({
      message: "Sorry, there was an error",
    });
  }
};

export default createUser;
