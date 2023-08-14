import { MdSunny } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

function SunStatsCard() {
	return (
		<section className="sunrise-sunset-weather-wrapper">
			<div className={` bg-neutral-600  card-small`}>
				<h3 className="mb-xmd font-static-small">
					Sunrise &amp; Sunset
				</h3>

				<div className="flex align-ic sunrise-sunset-container">
					{/* Sunrise container */}
					<div className="flex align-ic text-neutral-200 sunrise-container">
						<MdSunny className="icon icon--xmedium" />
						<div className="sunrise-time-container">
							<h4 className="font-static-small">Sunrise</h4>
							<p className="font-dynamic-large">6:00 AM</p>
						</div>
					</div>

					{/* Sunset Container */}
					<div className="flex align-ic text-neutral-200 sunset-container">
						<BsFillMoonFill className="icon icon--xmedium" />

						<div className="sunset-time-container">
							<h4 className="font-static-small">Sunset</h4>
							<p className="font-dynamic-large">7:00 PM</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SunStatsCard;
