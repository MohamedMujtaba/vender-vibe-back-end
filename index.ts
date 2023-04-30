import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

// Import Routes
import componyRouter from "./src/routes/company.route";
import productRouter from "./src/routes/product.route";
import businessRouter from "./src/routes/business.route";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(helmet());

// Routes
app.use("/api/v1/compony", componyRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/business", businessRouter);

app.listen(5000, () => {
  console.log("Server in running on port 5000");
});
