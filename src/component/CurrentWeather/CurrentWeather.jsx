import { BsFillCalendar2EventFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { useGlobalContext } from "../../Hooks/GlobalContext";

function CurrentWeather() {
	const {
		currentWeather: {
			date,
			cityName,
			weatherCondition,
			currentTemperature,
			country,
			weatherIcon,
		},
	} = useGlobalContext();

	return (
		<section className="current-weather-wrapper">
			<div className="text-neutral-200 bg-neutral-500 card current-weather-card">
				<h2 className="font-static-medium pb-xlmd current-weather-card__title ">
					Now
				</h2>

				{/* current temperature container */}
				<div className="text-neutral-100 flex align-ic current-weather-temperature-container">
					{/* current temperature */}
					<p className="font-dynamic-xlarge current-weather__temperature">
						{currentTemperature}&deg;<sup>C</sup>
					</p>

					{/* icon for current weather */}
					<img
						className="icon"
						src={`./weather_icons/${weatherIcon}.png`}
					/>
				</div>

				{/* current weather condition e.g: cloudy, haze, rainy */}
				<p className="mt-lg mb-lg fw-semi-bold current-weather__condition">
					{weatherCondition}
				</p>

				{/* Current weather information list such as time, date and location */}
				<ul className="pt-lg grid current-weather-information-list">
					{/* date and time */}
					<li className="flex align-ic current-weather-information-list__item">
						<BsFillCalendar2EventFill className="icon icon--small" />

						<p className="text-neutral-300">{date}</p>
					</li>

					{/* Location */}
					<li className="flex align-ic current-weather-information-list__item">
						<FaLocationDot className="icon icon--small" />

						<p className="text-neutral-300">
							{cityName}, {country}
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default CurrentWeather;
