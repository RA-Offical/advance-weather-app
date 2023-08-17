import { createContext, useReducer } from "react";
import reducer from "./reducer";
import URL from "./data/url";
import fetchData from "./data-fetching/fetch-data";
import {
	filterCurrentWeatherAirPollutionData,
	filterCurrentWeatherData,
} from "./data/filterData";

// app context
const AppContext = createContext();

// initial state
const initialState = {
	isError: false,
	currentWeather: {
		pressure: 123,
		humidity: 456,
		feelLike: 300,
		weatherIcon: "01d",
		coord: {
			lat: 33.6938,
			lon: 73.0652,
		},
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
};

function AppProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

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

	const getWeatherDataByQuery = async (name) => {
		const result = await fetchData(URL.getWeatherByQuery(name));

		console.log(result.data);
	};

	/**
	 *
	 * @param {number} lat
	 * @param {number} lon
	 *
	 * this function will get the weather details for today, also the pollution
	 */
	const getWeatherDataByCoordinates = async (lat, lon) => {
		// making promise
		const promiseArray = Promise.all([
			fetchData(URL.getWeatherByCoordinates(lat, lon)),
			fetchData(URL.getAirPollutionByCoordinates(lat, lon)),
		]);

		const newCurrentWeather = await promiseArray.then((result) => {
			// filtering current weather result
			const filteredCurrentWeatherData = filterCurrentWeatherData(
				result[0]
			);

			// filtering air pollution results
			const filteredCurrentWeatherAirPollutionData =
				filterCurrentWeatherAirPollutionData(result[1]);

			// calling dispatch
			return {
				...filteredCurrentWeatherData,
				...filteredCurrentWeatherAirPollutionData,
			};
		});

		return newCurrentWeather;
	};

	/**
	 * returning jsx
	 */

	return (
		<AppContext.Provider
			value={{
				...state,
				getWeatherDataByQuery,
				getWeatherDataByCoordinates,
				setCurrentWeather,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export { AppProvider, AppContext };
