const reducer = (state, action) => {
	if (action.type === "SET_CURRENT_WEATHER_METRICS") {
		return { ...state, currentWeather: action.payload.data };
	} else if (action.type === "SET_FORECAST") {
		return { ...state, hourlyForecast: action.payload.data };
	} else if (action.type === "SET_DAYS_FORECAST") {
		return { ...state, daysForecast: action.payload.data };
	} else if (action.type === "SET_LOCATION_COORD") {
		return { ...state, coord: action.payload.coord };
	} else if (action.type === "SET_LOADER") {
		return { ...state, isLoading: action.payload.isLoading };
	}

	return state;
};

export default reducer;
