import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoute from "./Routes/user.route.js";
import companyRoute from "./Routes/company.route.js";
import jobRoute from "./Routes/job.route.js";
import applicationRoute from "./Routes/application.route.js";
import dotenv from "dotenv";
dotenv.config({});

const app = express(); // Moved this up

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
};
app.use(cors(corsOptions));

const port = process.env.PORT || 3000;

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`);
});
