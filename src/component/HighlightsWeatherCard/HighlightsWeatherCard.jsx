import { QualityIndexWeatherCard } from "../";

function HighlightsWeatherCard() {
	return (
		<section>
			<div className="bg-neutral-500 card">
				<h2 className="text-neutral-200 font-static-medium  mb-xmd">
					Today Highlights
				</h2>

				{/* Quality index Component */}
				<QualityIndexWeatherCard />

				{/* Sunrise & Sunset Component */}
				{/* <SunriseSunsetWeatherComponent /> */}
			</div>
		</section>
	);
}

export default HighlightsWeatherCard;
