import axios from "axios";

const getAction = async (options) => {
	try {
		const result = await axios({
			method: "GET",
			...options,
		});

		return result.data;
	} catch (error) {
		console.log(error.message);
		if (error.response) {
			console.log("Response Error");
			console.log(error.response.data.statusText);
		} else if (error.request) {
			console.log("Request Error");
			console.log(error.request);
		} else {
			console.log(error);
		}
	}
};

const fetchData = async (url) => {
	const options = {
		url,
		headers: {
			Accept: "application/json",
		},
	};

	return await getAction(options);
};

export default fetchData;
