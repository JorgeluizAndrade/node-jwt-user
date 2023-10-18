import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./db/db";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
connectDb();

app.use(
  cors({
    origin: "*",
  })
);

app.use("api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT | 3000;

app.listen(PORT, () => {
  console.log(`Running in http://localhost:${PORT}`);
});
