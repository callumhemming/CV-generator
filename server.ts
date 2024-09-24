import express from "express";
import expressHandleBars from "express-handlebars";
import { marked } from "marked";
import { fixture } from "./inputs/lorem";

const app = express();

const port = 3000;

const hbs = expressHandleBars.create({
  extname: ".mdhbs",
  helpers: {
    markdown: function (options) {
      const hydratedContent = options.fn(this);

      return marked(
        hydratedContent
          .trim()
          .replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""),
        {
          gfm: true,
          breaks: true,
          async: false,
        }
      );
    },
  },
});

app.use(express.static("public"));
app.engine("mdhbs", hbs.engine);
app.set("view engine", "mdhbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home", fixture);
});

app.listen(port, () => console.log(`App listening to port ${port}`));
