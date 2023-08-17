import directionImg from "../../assets/direction.png";
import { HourlyForecastCard } from "..";
import useGrabScroll from "../../Hooks/GrabScroll";
import { useGlobalContext } from "../../Hooks/GlobalContext";

function HourlyForecast() {
	const { hourlyForecast } = useGlobalContext();
	const sliderOneRef = useGrabScroll();
	const sliderTwoRef = useGrabScroll();

	return (
		<section className="current-weather-day-stats-container">
			<h2 className="fw-semi-bold mb-xmd text-neutral-200 font-static-medium">
				Today
			</h2>

			<div className="grid current-day-stats-content">
				<ul
					className="flex current-day-stats-container"
					ref={sliderOneRef}
				>
					{hourlyForecast.map(({ time, temperature, icon }) => {
						/* seperate card for temeprature */
						return (
							<li key={time}>
								<HourlyForecastCard
									statsTime={time}
									statsIcon={
										<img
											style={{ marginInline: "auto" }}
											src={`./weather_icons/${icon}.png`}
											className="text-neutral-200 icon icon-xxmd"
											alt=""
										/>
									}
									statsValueUnit={
										<>
											&deg;<sup>C</sup>
										</>
									}
									statsValue={temperature}
								/>
							</li>
						);
					})}
				</ul>

				<ul
					className="flex current-day-stats-container"
					ref={sliderTwoRef}
				>
					{hourlyForecast.map(({ time, windSpeed, windDegree }) => {
						/* seperate card for temeprature */

						return (
							<li key={time}>
								<HourlyForecastCard
									statsTime={time}
									statsIcon={
										<img
											style={{
												marginInline: "auto",
												transform: `rotateZ(
													${windDegree}deg
												)`,
											}}
											src={directionImg}
											className="text-neutral-200 icon icon-xxmd"
											alt=""
										/>
									}
									statsValueUnit={
										<>
											<sub>kmh</sub>
										</>
									}
									statsValue={windSpeed}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default HourlyForecast;
