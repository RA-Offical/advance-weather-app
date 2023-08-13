function CurrentWeatherStatsCard({
	statsTitle,
	statsValue,
	statsIcon,
	statsValueUnit,
	generalClasses,
}) {
	return (
		<article className={`${generalClasses} bg-neutral-600 card-small`}>
			<h3 className="font-static-small">{statsTitle}</h3>

			<div className="mt-xmd flex align-ic weather-stats-container">
				{statsIcon}
				<p className="text-neutral-200 font-dynamic-large">
					{statsValue}
					{statsValueUnit}
				</p>
			</div>
		</article>
	);
}

export default CurrentWeatherStatsCard;
