import { Request, Response, Router } from "express";
import { getUsers, getUserById } from "./userController";

export const userRouter = Router();

userRouter.get("/v1/users", async (_, res: Response) => {
  const result = await getUsers();
  res.status(200).send(result);
});

userRouter.get("/v1/users/:id", async (req: Request, res: Response) => {
  const result = await getUserById(req.params.id);
  res.status(200).send(result);
});
