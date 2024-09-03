import express from "express";
import db from "../database/db.json";
import { z } from "zod";

const app = express();
const port = 3000;

app.disable("x-powered-by");
app.use(express.json());

// allow cors
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// get all datadase
app.get("/", (_, res) => {
  res.send(db);
});

// get data by id
app.get("/miduapi/:id", (req, res) => {
  const id = req.params.id;
  const result = db.filter((item) => item.id.toString() === id);
  res.send(result);
});

// post data
app.post("/miduapi", (req, res) => {
  const { autor, frase, image } = req.body;

  const schema = z.object({
    autor: z.string(),
    frase: z.string(),
  });
  const result = schema.safeParse(req.body);
  if (result.success) {
    db.push({ id: db.length + 1, autor, frase, image });
    res.send(req.body).status(201);
  } else {
    res.send(result.error).status(400);
  }
});

app.use((_, res) => {
  res.send("<h1>405 Not Found</h1>").status(404);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//
