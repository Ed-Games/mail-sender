import express from "express";

const app = express();

const PORT = 3333;
const HOST = "0.0.0.0";

app.use(express.json());

app.get("/app", (request, response) =>
  response.send("hello world!!!")
);

app.listen(PORT, HOST);
