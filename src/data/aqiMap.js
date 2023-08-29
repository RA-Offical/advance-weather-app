export const aqiMap = (aqi) => {
	switch (aqi) {
		case 1:
			return "good";
		case 2:
			return "fair";
		case 3:
			return "poor";
		default:
			return "poor";
	}
};
