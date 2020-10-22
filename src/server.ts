import http from "http";
import express, { Router } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";
import { userRouter } from "./services";

const app = express();
const { PORT = 3000 } = process.env;
const server = http.createServer(app);

// Middleware
app.use(morgan("combined"));
app.use(helmet());
app.use(cors({ credentials: true, origin: true }));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(compression());

// Set up routers
const apiRouter = Router();
apiRouter.use("/api", userRouter);
app.use(apiRouter);

server.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}...`);
});
