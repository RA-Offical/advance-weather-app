import { CurrentWeatherMetricsCard, QualityIndexCard, SunStatsCard } from "..";
import { WiHumidity } from "react-icons/wi";
import { LuWaves } from "react-icons/lu";
import { PiEyeBold } from "react-icons/pi";
import { BsThermometerHalf } from "react-icons/bs";

function HighlightsWeatherCard() {
	return (
		<section className="highlight-weather-wrapper">
			<div className="bg-neutral-500 card highlights-weather-card">
				<h2 className="text-neutral-200 font-static-medium  mb-xmd">
					Today Highlights
				</h2>

				<div className="grid highlight-weather-card-body">
					{/* Quality index Component */}
					<QualityIndexCard />

					{/* Sunrise & Sunset Component */}
					<SunStatsCard />

					{/* Current Weather Stats Component: Humidity */}
					<CurrentWeatherMetricsCard
						statsTitle={"Humidity"}
						statsValue={60}
						statsIcon={
							<WiHumidity className="text-neutral-200 icon icon--xxmedium icon--responsive" />
						}
						statsValueUnit={<sub>%</sub>}
						generalClasses={`area-humudity`}
					/>
					{/* Current Weather Stats Component: Humidity */}
					<CurrentWeatherMetricsCard
						statsTitle={"Pressure"}
						statsValue={1011}
						statsIcon={
							<LuWaves className="text-neutral-200 icon icon--xxmedium icon--responsive" />
						}
						statsValueUnit={<sub>hPa</sub>}
						generalClasses={`area-pressure`}
					/>
					{/* Current Weather Stats Component: Humidity */}
					<CurrentWeatherMetricsCard
						statsTitle={"Visibility"}
						statsValue={0.4}
						statsIcon={
							<PiEyeBold className="text-neutral-200 icon icon--xxmedium icon--responsive" />
						}
						statsValueUnit={<sub>km</sub>}
						generalClasses={`area-visibility`}
					/>
					{/* Current Weather Stats Component: Humidity */}
					<CurrentWeatherMetricsCard
						statsTitle={"Feels Like"}
						statsValue={-41}
						statsIcon={
							<BsThermometerHalf className="text-neutral-200 icon icon--xxmedium icon--responsive" />
						}
						statsValueUnit={
							<>
								&deg;
								<sup>C</sup>
							</>
						}
						generalClasses={`area-feels`}
					/>
				</div>
			</div>
		</section>
	);
}

export default HighlightsWeatherCard;
