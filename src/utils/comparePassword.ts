import { compare } from "bcrypt";

interface Props {
  password: string;
  hashPassword: string;
}

export const comparePassword: ({
  password,
  hashPassword,
}: Props) => Promise<boolean> = async ({ password, hashPassword }) => {
  const match = compare(password, hashPassword);
  return match;
};
