import { TbWind } from "react-icons/tb";
import { useGlobalContext } from "../../Hooks/GlobalContext";
import { aqiMap } from "../../data/aqiMap";

function QualityIndexCard() {
	const { currentWeather } = useGlobalContext();

	const { aqi, airPollutionComponent } = currentWeather;

	return (
		<div className={`bg-neutral-600 card-small quality-index--card`}>
			{/* header which shows quality index, poor, fair , good */}
			<header className="flex align-ic mb-md quality-index-header">
				<h3 className="font-static-small">Air Quality Index</h3>

				<p
					className={`font-static-small border-radius-full quality-index__value quality-index__value--${aqiMap(
						aqi
					)}`}
				>
					{aqiMap(aqi)}
				</p>
			</header>

			<div className="pt-xmd pb-sm flex align-ic quality-index-body">
				{/* Wind Icons */}
				<TbWind className="text-neutral-200 icon icon--xmedium" />

				<ul className="flex align-ic quality-index-list">
					{airPollutionComponent.map(({ key, value }) => {
						return (
							<li
								key={key}
								className="grid quality-index-list__item"
							>
								<p className="font-static-small quality-index__gas">
									{key.toUpperCase()}
								</p>

								<p className="text-neutral-200 font-dynamic-large  quality-index__gas-concentration">
									{value}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default QualityIndexCard;
