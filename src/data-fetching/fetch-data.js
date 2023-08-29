import axios from "axios";

const getAction = async (options) => {
	try {
		const result = await axios({
			method: "GET",
			...options,
		});

		return result.data;
	} catch (error) {
		if (error.response) {
			const { cod, message } = error.response.data;
			return { code: cod, message };
		} else if (error.request) {
			return { code: error.code, message: error.message };
		}
		return { code: "Unkown Error", message: "Try Again" };
	}
};

const fetchData = async (url) => {
	const options = {
		url,
		headers: {
			Accept: "application/json",
		},
		timeout: 10000,
	};

	return await getAction(options);
};

export default fetchData;
