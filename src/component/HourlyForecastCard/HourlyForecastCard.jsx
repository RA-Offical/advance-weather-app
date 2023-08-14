function HourlyForecastCard({
	statsTime,
	statsValue,
	statsIcon,
	statsValueUnit,
}) {
	return (
		<article className="bg-neutral-500 card-small">
			<h3 className="mb-xmd font-static-medium">{statsTime}</h3>
			{statsIcon}
			<p className="mt-xmd font-static-medium">
				{statsValue}
				{statsValueUnit}
			</p>
		</article>
	);
}
export default HourlyForecastCard;
