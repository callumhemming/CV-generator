import express from "express";
import expressHandleBars from "express-handlebars";
import { marked } from "marked";

const app = express();

const port = 3000;

const hbs = expressHandleBars.create({
  helpers: {
    markdown: (options) => marked(options.fn(this).trim()),
  },
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home", {
    name: "callum hemming",
  });
});

app.listen(port, () => console.log(`App listening to port ${port}`));
