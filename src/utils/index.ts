import { Router, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

type Wrapper = (router: Router) => void;

export const applyMiddleware = (middleware: Wrapper[], router: Router) => {
  for (const f of middleware) {
    f(router);
  }
};

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (router as any)[method](path, handler);
  }
};

// Database utility
import pgPromise = require("pg-promise");

// Initializing the library:
const pgp: pgPromise.IMain = pgPromise();

// Creating the database instance with extensions:
const cn = <string>process.env.DATABASE_URL;
const db = pgp(cn);

// Alternatively, you can get access to pgp via db.$config.pgp
// See: https://vitaly-t.github.io/pg-promise/Database.html#$config
export { db, pgp };
