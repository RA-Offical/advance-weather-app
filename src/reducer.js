const reducer = (state, action) => {
	if (action.type === "SET_CURRENT_WEATHER_METRICS") {
		return { ...state, currentWeather: action.payload.data };
	}
	return state;
};

export default reducer;
