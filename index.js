import express from "express";
import { join } from "path";
import route from "./routes/app.js";
import bodyParser from "body-parser";

const app = express();

app.set("view engine", "ejs");
app.use(express.static(join(process.cwd(), "public")));
app.use(bodyParser.json());

app.use("/", route);

app.post("/post", (req, res) => {
  const { name, youtube, age } = req.body;
  res.send(`${name}, ${youtube}, ${age}`);
});

app.listen(8000, () => console.log("server's up!"));
