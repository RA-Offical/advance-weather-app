import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "./reducer";
import URL from "./data/url";
import fetchData from "./data-fetching/fetch-data";
import {
	filterCurrentWeatherAirPollutionData,
	filterCurrentWeatherData,
	filterDaysForecastData,
	filterHourlyForecastData,
	filterWeatherLocationData,
} from "./data/filterData";

// app context
const AppContext = createContext();

// initial state
const initialState = {
	coord: { lat: 51.5085, lon: -0.1257 },
	timezone: 3600,
	currentWeather: {
		pressure: 123,
		humidity: 456,
		feelLike: 300,
		date: "Thursday 17, Aug",
		weatherIcon: "01d",
		airPollutionComponent: [
			{ key: "NO2", value: "56.00" },
			{ key: "SO2", value: "87" },
			{ key: "O3", value: "32.4" },
			{ key: "NH3", value: "54.87" },
		],
		timezone: 7200,
		country: "PK",
		weatherCondition: "Clouds",
		currentTemperature: 35,
		visibility: 1000,
		sunStats: { sunrise: "6:20 A.M", sunset: "7:20 PM" },
		cityName: "Islamabad",
	},
	hourlyForecast: [],
	daysForecast: [],
};

function AppProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const navigate = useNavigate();

	/**
	 *
	 * @param {object} data
	 *
	 * dispatch for storing all current weather related data
	 */
	const setCurrentWeather = (data) => {
		dispatch({ type: "SET_CURRENT_WEATHER_METRICS", payload: { data } });
		// console.log(data);
	};

	/**
	 *
	 * @param {object} data
	 *
	 * dispatch for storing hourly forecast data
	 */
	const setHourlyForecast = (data) => {
		dispatch({ type: "SET_FORECAST", payload: { data } });
	};

	/**
	 *
	 */

	const setLocationCoordinates = (coord) => {
		dispatch({ type: "SET_LOCATION_COORD", payload: { coord } });
	};

	/**
	 *
	 * @param {object} data
	 *
	 * dispatch for storing days forecast data
	 */
	const setDaysForecast = (data) => {
		dispatch({ type: "SET_DAYS_FORECAST", payload: { data } });
	};

	const getLocationCoordinates = async (query) => {
		const result = await fetchData(URL.getWeatherByQuery(query));

		if (result.code) {
			navigate("error", { state: { result } });
			return;
		}

		const { coord } = result;

		setLocationCoordinates(coord);
	};

	/**
	 * get all weather related data
	 */
	const getAllWeatherData = async () => {
		const { lat, lon } = state.coord;
		const promiseArray = Promise.all([
			fetchData(URL.getWeatherByCoordinates(lat, lon)),

			fetchData(URL.getAirPollutionByCoordinates(lat, lon)),

			fetchData(URL.getForecastByCoordinates(lat, lon)),
		]);

		promiseArray.then((result) => {
			if (result[2].code) {
				navigate("error", { state: { result: result[2] } });
				return;
			}

			const filteredWeatherLocationData = filterWeatherLocationData(
				result[0]
			);

			const filteredCurrentWeatherData = filterCurrentWeatherData(
				result[0]
			);
			const filteredCurrentWeatherAirPollutionData =
				filterCurrentWeatherAirPollutionData(result[1]);

			const filteredHourlyForecastData = filterHourlyForecastData(
				filteredWeatherLocationData.timezone,
				result[2].list
			);
			const filteredDaysForecastData = filterDaysForecastData(
				filteredWeatherLocationData.timezone,
				result[2].list
			);

			setCurrentWeather({
				...filteredCurrentWeatherData,
				...filteredCurrentWeatherAirPollutionData,
			});
			setHourlyForecast(filteredHourlyForecastData);
			setDaysForecast(filteredDaysForecastData);
		});
	};

	/**
	 * returning jsx
	 */

	useEffect(() => {
		getAllWeatherData();
	}, [state.coord]);

	return (
		<AppContext.Provider
			value={{
				...state,
				getLocationCoordinates,
				setLocationCoordinates,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export { AppProvider, AppContext };
