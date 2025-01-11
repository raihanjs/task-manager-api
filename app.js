import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";

import {
  DATABASE,
  MAX_JSON_SIZE,
  PORT,
  REQUEST_LIMIT_NUMBER,
  REQUEST_LIMIT_TIME,
  URL_ENCODED,
  WEB_CACHE,
} from "./app/config/config.js";

import router from "./routes/api.js";

const app = express();

// App Use Default Middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(helmet());

// App Use Limiter
const limiter = rateLimit({
  windowMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);

// Routing Configuration
app.use("/api", router);

// Run The Application
app.listen(PORT, () => {
  console.log("Server started on Port" + PORT);
});
