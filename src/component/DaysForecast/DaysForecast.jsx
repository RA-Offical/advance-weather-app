import { BsFillCloudsFill } from "react-icons/bs";

function DayForecast() {
	return (
		<section className="forecast-weather-wrapper">
			<h2 className="text-neutral-200 font-static-medium fw-semi-bold mb-xmd">
				5 days Forecast
			</h2>

			<div className="bg-neutral-500 card ">
				{/* list of days representing forcast */}
				<ul className="grid forecast-list" role="list">
					{/* forecast list item, containing status of weather, time and date */}
					<li className="flex align-ic forecast-list__item">
						<div className="flex align-ic forecast-list-temperature-container">
							<BsFillCloudsFill className="text-neutral-200 icon icon--medium icon--responsive" />
							<p className="text-neutral-200 font-dynamic-medium">
								-40&deg;<sup>C</sup>
							</p>
						</div>
						<p className="font-static-small">2 March</p>
						<p className="font-static-small">Thursday</p>
					</li>

					{/* forecast list item, containing status of weather, time and date */}
					<li className="flex align-ic forecast-list__item">
						<div className="flex align-ic forecast-list-temperature-container">
							<BsFillCloudsFill className="text-neutral-200 icon icon--medium icon--responsive" />
							<p className="text-neutral-200 font-dynamic-medium">
								-40&deg;<sup>C</sup>
							</p>
						</div>
						<p className="font-static-small">2 March</p>
						<p className="font-static-small">Thursday</p>
					</li>

					{/* forecast list item, containing status of weather, time and date */}
					<li className="flex align-ic forecast-list__item">
						<div className="flex align-ic forecast-list-temperature-container">
							<BsFillCloudsFill className="text-neutral-200 icon icon--medium icon--responsive" />
							<p className="text-neutral-200 font-dynamic-medium">
								-40&deg;<sup>C</sup>
							</p>
						</div>
						<p className="font-static-small">2 March</p>
						<p className="font-static-small">Thursday</p>
					</li>

					{/* forecast list item, containing status of weather, time and date */}
					<li className="flex align-ic forecast-list__item">
						<div className="flex align-ic forecast-list-temperature-container">
							<BsFillCloudsFill className="text-neutral-200 icon icon--medium icon--responsive" />
							<p className="text-neutral-200 font-dynamic-medium">
								-40&deg;<sup>C</sup>
							</p>
						</div>
						<p className="font-static-small">2 March</p>
						<p className="font-static-small">Thursday</p>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default DayForecast;
