const express = require("express");

const app = express();

// creating a middleware function that calculates the square of the integer param passed in the route

const squareNumber = (req, res, next) => {
	const { number } = req.params;
	req.squaredNumber = number * number;
	next();
};

app.use("/:number", squareNumber, function (req, res) {
	const squaredNumber = req.squaredNumber;
	res.send(`The square of the number you provided is ${squaredNumber}`);
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.listen(3000, () => {
	console.log("Connected!");
});
