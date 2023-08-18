import { BsFillCloudsFill } from "react-icons/bs";
import { useGlobalContext } from "../../Hooks/GlobalContext";

function DayForecast() {
	const { daysForecast } = useGlobalContext();

	return (
		<section className="forecast-weather-wrapper">
			<h2 className="text-neutral-200 font-static-medium fw-semi-bold mb-xmd">
				5 days Forecast
			</h2>

			<div className="bg-neutral-500 card ">
				{/* list of days representing forcast */}
				<ul className="grid forecast-list" role="list">
					{daysForecast.map(
						({ icon, date, weekday, temperature }) => {
							return (
								/* forecast list item, containing status of weather, time and date */
								<li
									key={date}
									className="flex align-ic forecast-list__item"
								>
									<div className="flex align-ic forecast-list-temperature-container">
										<img
											src={`./weather_icons/${icon}.png`}
											className="text-neutral-200 icon icon--medium icon--responsive"
										/>
										<p className="text-neutral-200 font-dynamic-medium">
											{temperature}&deg;<sup>C</sup>
										</p>
									</div>
									<p className="font-static-small">{date}</p>
									<p className="font-static-small">
										{weekday}
									</p>
								</li>
							);
						}
					)}
				</ul>
			</div>
		</section>
	);
}

export default DayForecast;
