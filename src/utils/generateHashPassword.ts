import { genSalt, hash } from "bcrypt";

interface Props {
  password: string;
}

export const generateHashPassword: ({
  password,
}: Props) => Promise<string> = async ({ password }) => {
  const salt = await genSalt(10);
  const hashPassword = await hash(password, salt);
  return hashPassword;
};
