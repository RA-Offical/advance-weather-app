import {
	getDateFromTimeStamp,
	getHoursFromTimeStamp,
	getTimeFromTimeStamp,
} from "./dateTime";
import { convertMpsToKmh } from "./speedConverter";
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
		dt,
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
		date: getDateFromTimeStamp(timezone, dt),
		country,
		cityName: name,
		weatherCondition: main,
		timezone: timezone,
		visibility,
		weatherIcon: icon,
	};
};

export const filterForecastData = (timezone, forecastData) => {
	const filteredForecastData = [];

	for (const [key, value] of forecastData.entries()) {
		if (key > 6) break;

		const {
			dt: timestamp,
			main: { temp },
			weather,
			wind: { speed, deg },
		} = value;

		filteredForecastData.push({
			time: getHoursFromTimeStamp(timezone, timestamp),
			icon: weather[0].icon,
			windSpeed: convertMpsToKmh(speed),
			windDegree: deg,
			temperature: convertKelvinToCelcius(temp),
		});
	}

	return filteredForecastData;
};

export const filterDaysForecastData = (timezone, forecastData) => {
	for (let i = 7, len = forecastData.length; i < len; i += 8) {}
};
