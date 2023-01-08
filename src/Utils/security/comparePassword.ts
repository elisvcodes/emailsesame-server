import bcrypt from "bcrypt";

const comparePassword = (providedPassword: string, hashedPassword: string) => {
  return bcrypt.compare(providedPassword, hashedPassword);
};

export default comparePassword;
