import bcrypt from "bcrypt";

const hashPassword = (password: string) => {
  const hashedPassword = bcrypt.hash(password, 5);
  return hashedPassword;
};

export default hashPassword;
