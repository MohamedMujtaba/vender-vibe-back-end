import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(helmet());

app.listen(5000, () => {
  console.log("Server in running on port 5000");
});
