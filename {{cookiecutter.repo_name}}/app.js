import express from "express";
import morgan from "morgan";
import nunjucks from "nunjucks";

import router from "./views/index.js";

const app = express();
const port = process.env.PORT || 3000;

// templates
nunjucks.configure("templates", {
  autoescape: true,
  express: app,
});

// logging
app.use(morgan("dev"));

// routes
app.use("/", router);
app.use("/public", express.static("public"));

// server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
