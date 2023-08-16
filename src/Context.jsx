import { createContext, useReducer } from "react";
import reducer from "./reducer";
import URL from "./data/url";
import fetchData from "./data-fetching/fetch-data";

// app context
const AppContext = createContext();

// initial state
const initialState = {
	isError: false,
	pressure: 123,
	humidity: 456,
	feelLike: 300,
	coord: {
		lat: 33.6938,
		lon: 73.0652,
	},
	gasComponent: {
		NO2: "56.00",
		SO2: "87",
		O3: "32.4",
		NH3: "54.87",
	},
	dayForecast: {},
	country: "Islamabad",
	state: "PK",
	weatherCondition: "Clouds",
	currentTemperature: 35,
	visibility: 1000,
	sunStats: { sunrise: "6:20 A.M", sunset: "7:20 PM" },
	cityName: "Islamabad",
};

function AppProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getWeatherDataByQuery = async (name) => {
		const result = await fetchData(URL.getWeatherByQuery(name));

		console.log(result.data);
	};

	const getWeatherDataByCoordinates = async (lat, lon) => {
		const result = await fetchData(URL.getWeatherByCoordinates(lat, lon));

		console.log(result);
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				getWeatherDataByQuery,
				getWeatherDataByCoordinates,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export { AppProvider, AppContext };
