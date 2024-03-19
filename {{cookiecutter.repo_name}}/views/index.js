export function indexView(req, res) {
  return res.render("index.html", { title: "{{ cookiecutter.project_name }}" });
}
