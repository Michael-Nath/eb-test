const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "front", "build")));

// serving the react app
app.get("/api/:number", (req, res) => {
	console.log(req.params);
	const { number } = req.params;
	res.json({ answer: number * number });
});

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "front", "build", "index.html"));
});

app.listen(3001, () => console.log("Connected!"));
