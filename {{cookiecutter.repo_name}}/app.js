import express from "express";
import morgan from "morgan";
import nunjucks from "nunjucks";

import indexView from "./views/index.js";

const app = express();
const port = process.env.PORT || 3000;

// templates
nunjucks.configure("templates", {
  autoescape: true,
  express: app,
});

// middleware
app.use(morgan("dev"));
app.use(express.static("public"));

// routes
app.get("/", indexView);

// server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
