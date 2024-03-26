import express from "express";
import morgan from "morgan";
import nunjucks from "nunjucks";

import { errorHandler, notFoundHandler } from "./lib/error.js";
import router from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

// templates
nunjucks.configure("templates", {
  autoescape: true,
  express: app,
});

// logging
app.use(morgan("dev"));

// static files
app.use(express.static("public"));

// routes
app.use("/", router);

// error pages
app.use(notFoundHandler);
app.use(errorHandler);

// server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
