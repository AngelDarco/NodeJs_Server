// init the express server

import express from "express";

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
	console.log("server running ...");
	res.send("server up and running");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
