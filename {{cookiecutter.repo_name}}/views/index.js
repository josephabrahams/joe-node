import express from "express";

const router = express.Router();

router.get("/", function (req, res) {
  res.render("index.html", { title: "{{ cookiecutter.project_name }}" });
});

export default router;
