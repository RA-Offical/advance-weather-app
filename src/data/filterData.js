import {
	getDateFromTimeStamp,
	getDayMonth,
	getHoursFromTimeStamp,
	getTimeFromTimeStamp,
	getWeekdayFromTimeStamp,
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
		visibility,
		weatherIcon: icon,
	};
};

export const filterWeatherLocationData = (currentWeatherData) => {
	const { timezone, coord } = currentWeatherData;
	return { timezone, coord };
};

export const filterHourlyForecastData = (timezone, forecastData) => {
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
	const filteredDaysForecastData = [];

	for (let i = 7, len = forecastData.length; i < len; i += 8) {
		const {
			dt,
			weather,
			main: { temp_max },
		} = forecastData[i];
		const icon = weather[0].icon;
		const weekday = getWeekdayFromTimeStamp(timezone, dt);
		const date = getDayMonth(timezone, dt);

		filteredDaysForecastData.push({
			weekday,
			icon,
			date,
			temperature: convertKelvinToCelcius(temp_max),
		});
	}

	return filteredDaysForecastData;
};
