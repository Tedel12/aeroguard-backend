import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import predictRouter from "./predict.js";
import alertRouter from "./alerts.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("✅ Air-Qualify Backend is running");
});

app.use("/predict", predictRouter);
app.use("/alerts", alertRouter);

export default app;
