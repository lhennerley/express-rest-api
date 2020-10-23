import { db, User } from "../../database";

export const getUsers = async (): Promise<User[]> => {
  return await db.any<User>("SELECT * FROM sample.users");
};

export const getUserById = async (id: string): Promise<User | null> => {
  return await db.oneOrNone<User>(
    "SELECT * FROM sample.users WHERE id = $1",
    id
  );
};
