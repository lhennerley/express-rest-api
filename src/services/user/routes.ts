import { Request, Response } from "express";
import { getUsers, getUserById } from "./userController";

export default [
  {
    path: "/api/v1/users",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const result = await getUsers();
      res.status(200).send(result);
    }
  },
  {
    path: "/api/v1/users/:id",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const result = await getUserById(req.params.id);
      res.status(200).send(result);
    }
  }
];
