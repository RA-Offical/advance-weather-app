const baseURL = "https://api.openweathermap.org/data/2.5";

const URL = {
	getWeatherByCoordinates: (lat, lon) =>
		`${baseURL}/weather?lat=${lat}&lon=${lon}&appid=${
			import.meta.env.VITE_API_KEY
		}`,
	getWeatherByQuery: (query) =>
		`${baseURL}/weather?q=${query}&appid=${import.meta.env.VITE_API_KEY}`,
	getForecastByCoordinates: (lat, lon) =>
		`${baseURL}/forecast?lat=${lat}&lon=${lon}&appid=${
			import.meta.env.VITE_API_KEY
		}`,
	getAirPollutionByCoordinates: (lat, lon) =>
		`${baseURL}/air_pollution?lat=${lat}&lon=${lon}&appid=${
			import.meta.env.VITE_API_KEY
		}`,
	getHintList: (query) =>
		`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${
			import.meta.env.VITE_API_KEY
		}`,
};

export default URL;
