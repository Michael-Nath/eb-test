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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Connected!"));
