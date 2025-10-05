import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import predictRouter from "./predict.js";
import alertRouter from "./alerts.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/predict", predictRouter);
app.use("/api/alerts", alertRouter);

app.get("/", (req, res) => {
  res.send("Air-Qualify Backend is running");
});

export default app;
