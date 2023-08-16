const baseURL = "https://api.openweathermap.org/data/2.5";
const APIKEY = "157cc963625396049b1ef33b0a6b98a4";

const URL = {
	getWeatherByCoordinates: (lat, lon) =>
		`${baseURL}/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`,
	getWeatherByQuery: (query) =>
		`${baseURL}/weather?q=${query}&appid=${APIKEY}`,
	getForecastByCoordinates: (lat, lon) =>
		`${baseURL}/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}`,
	getAirPollutionByCoordinates: (lat, lon) =>
		`${baseURL}/air_pollution?lat=${lat}&lon=${lon}&appid=${APIKEY}`,
	getHintList: (query) =>
		`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${APIKEY}`,
};

export default URL;
