const baseURL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "157cc963625396049b1ef33b0a6b98a4";

const URL = {
	getWeatherByCoordinates: (lat, lon) =>
		`${baseURL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
	getWeatherByQuery: (query) =>
		`${baseURL}/weather?q=${query}&appid=${API_KEY}`,
	getForecastByCoordinates: (lat, lon) =>
		`${baseURL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
	getAirPollutionByCoordinates: (lat, lon) =>
		`${baseURL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
	getHintList: (query) =>
		`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`,
};

export default URL;
