import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import userRoute from "./routers/user.route.js";
import gamesRoute from "./routers/game.route.js";
import exploreRoute from "./routers/explore.route.js";
import mongoose from "mongoose";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static images
app.use("/images", express.static(path.join(process.cwd(), "public/images")));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://glow-14n42qwfa-sumantbobades-projects.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongDB Connect");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/auth", userRoute);
app.use("/games", gamesRoute);
app.use("/explore", exploreRoute);
app.get("/test", (req, res) => {
  res.render("create-game");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT} `);
});
