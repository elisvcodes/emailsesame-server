import { Request, Response } from "express";
import prismaClient from "../../Utils/prisma";
import hashPassword from "../../Utils/security/hashPassword";

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

    res.json({ user });
  } catch (error) {
    res.json({
      message: "Sorry, there was an error",
    });
  }
};

export default createUser;
