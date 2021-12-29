import React from "react";
import { useParams } from "react-router-dom";

const axios = require("axios").default;
function Square() {
	const { number } = useParams();
	const [squaredNumber, setSquaredNumber] = React.useState(0);
	React.useEffect(async () => {
		axios
			.get(`/api/${number}`)
			.then(({ data }) => {
				console.log(data);
				setSquaredNumber(data.answer);
			})
			.catch((err) => console.error(err));
	}, []);
	return (
		<div>
			<h1>The square of your number is {squaredNumber}!</h1>
		</div>
	);
}

export default Square;
