const express = require("express");
var bodyParser = require("body-parser");

const path = require("path");

const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "/pages"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/2023", (req, res) => {
  res.render("2023");
});

app.get("*", (req, res) => {
  res.status(404).render("404", { url: req.url });
});

let randomString = (length) => {
  if (!!Number(length)) {
    if (!length) {
      length = 15;
    }
    var string = "";
    var characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < length; i++) {
      string += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return string;
  }
};

app.listen(5000, () => {
  console.log("Rodando na porta 5000");
});
