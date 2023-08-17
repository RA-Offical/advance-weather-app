import { getTimeFromTimeStamp } from "./dateTime";
import { convertKelvinToCelcius } from "./temperatureConverter";

export const filterHintList = (hintListData) => {
	return hintListData.map(({ name, lat, lon, state, country }, index) => {
		return { id: index, name, lat, lon, state, country };
	});
};

export const filterCurrentWeatherAirPollutionData = (
	currentWeatherAirPollutionData
) => {
	const {
		main: { aqi },
		components: { no2, so2, o3, nh3 },
	} = currentWeatherAirPollutionData.list[0];

	return {
		aqi,
		airPollutionComponent: [
			{ key: "NO2", value: no2 },
			{ key: "SO2", value: so2 },
			{ key: "O3", value: o3 },
			{ key: "NH3", value: nh3 },
		],
	};
};

export const filterCurrentWeatherData = (currentWeatherData) => {
	const {
		coord,
		weather,
		main: { temp, feels_like, pressure, humidity },
		visibility,
		sys: { sunrise, sunset, country },
		timezone,
		name,
	} = currentWeatherData;

	const { icon, main } = weather[0];

	return {
		coord,
		currentTemperature: convertKelvinToCelcius(temp),
		feelLike: convertKelvinToCelcius(feels_like),
		pressure,
		humidity,
		sunStats: {
			sunrise: getTimeFromTimeStamp(timezone, sunrise),
			sunset: getTimeFromTimeStamp(timezone, sunset),
		},
		country,
		cityName: name,
		weatherCondition: main,
		timezone: timezone,
		visibility,
		weatherIcon: icon,
	};
};
