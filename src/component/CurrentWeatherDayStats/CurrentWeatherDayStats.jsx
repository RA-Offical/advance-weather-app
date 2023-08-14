import { useEffect } from "react";
import { MdSunny } from "react-icons/md";
import { CurrentDayTemperatureWindCard } from "../";
import useGrabScroll from "../../Hooks/GrabScroll";

function CurrentWeatherDayStats() {
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
					{/* seperate card for temeprature */}
					<li>
						<CurrentDayTemperatureWindCard
							statsTime={"6AM"}
							statsIcon={
								<MdSunny className="text-neutral-200 icon icon-xxmd" />
							}
							statsValueUnit={
								<>
									&deg;<sup>C</sup>
								</>
							}
							statsValue={41}
						/>
					</li>

					{/* seperate card for temeprature */}
					<li>
						<CurrentDayTemperatureWindCard
							statsTime={"6AM"}
							statsIcon={
								<MdSunny className="text-neutral-200 icon icon-xxmd" />
							}
							statsValueUnit={
								<>
									&deg;<sup>C</sup>
								</>
							}
							statsValue={41}
						/>
					</li>

					{/* seperate card for temeprature */}
					<li>
						<CurrentDayTemperatureWindCard
							statsTime={"6AM"}
							statsIcon={
								<MdSunny className="text-neutral-200 icon icon-xxmd" />
							}
							statsValueUnit={
								<>
									&deg;<sup>C</sup>
								</>
							}
							statsValue={41}
						/>
					</li>

					{/* seperate card for temeprature */}
					<li>
						<CurrentDayTemperatureWindCard
							statsTime={"6AM"}
							statsIcon={
								<MdSunny className="text-neutral-200 icon icon-xxmd" />
							}
							statsValueUnit={
								<>
									&deg;<sup>C</sup>
								</>
							}
							statsValue={41}
						/>
					</li>

					{/* seperate card for temeprature */}
					<li>
						<CurrentDayTemperatureWindCard
							statsTime={"6AM"}
							statsIcon={
								<MdSunny className="text-neutral-200 icon icon-xxmd" />
							}
							statsValueUnit={
								<>
									&deg;<sup>C</sup>
								</>
							}
							statsValue={41}
						/>
					</li>
				</ul>

				<ul
					className="flex current-day-stats-container"
					ref={sliderTwoRef}
				>
					{/* seperate card for temeprature */}
					<li>
						<CurrentDayTemperatureWindCard
							statsTime={"6AM"}
							statsIcon={
								<MdSunny className="text-neutral-200 icon icon-xxmd" />
							}
							statsValueUnit={
								<>
									&deg;<sup>C</sup>
								</>
							}
							statsValue={41}
						/>
					</li>

					{/* seperate card for temeprature */}
					<li>
						<CurrentDayTemperatureWindCard
							statsTime={"6AM"}
							statsIcon={
								<MdSunny className="text-neutral-200 icon icon-xxmd" />
							}
							statsValueUnit={
								<>
									&deg;<sup>C</sup>
								</>
							}
							statsValue={41}
						/>
					</li>

					{/* seperate card for temeprature */}
					<li>
						<CurrentDayTemperatureWindCard
							statsTime={"6AM"}
							statsIcon={
								<MdSunny className="text-neutral-200 icon icon-xxmd" />
							}
							statsValueUnit={
								<>
									&deg;<sup>C</sup>
								</>
							}
							statsValue={41}
						/>
					</li>

					{/* seperate card for temeprature */}
					<li>
						<CurrentDayTemperatureWindCard
							statsTime={"6AM"}
							statsIcon={
								<MdSunny className="text-neutral-200 icon icon-xxmd" />
							}
							statsValueUnit={
								<>
									&deg;<sup>C</sup>
								</>
							}
							statsValue={41}
						/>
					</li>

					{/* seperate card for temeprature */}
					<li>
						<CurrentDayTemperatureWindCard
							statsTime={"6AM"}
							statsIcon={
								<MdSunny className="text-neutral-200 icon icon-xxmd" />
							}
							statsValueUnit={
								<>
									&deg;<sup>C</sup>
								</>
							}
							statsValue={41}
						/>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default CurrentWeatherDayStats;
