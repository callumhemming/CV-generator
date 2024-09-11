import express from "express";
import expressHandleBars from "express-handlebars";
import { marked } from "marked";

const app = express();

const port = 3000;

const hbs = expressHandleBars.create({
  helpers: {
    markdown: function (options) {
      const hydratedContent = options.fn(this);
      return marked(hydratedContent);
    },
  },
});

app.use(express.static("public"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home", {
    myName: "callum hemming",
  });
});

app.listen(port, () => console.log(`App listening to port ${port}`));
