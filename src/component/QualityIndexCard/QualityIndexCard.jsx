import { TbWind } from "react-icons/tb";

function QualityIndexCard() {
	return (
		<div className={`bg-neutral-600 card-small quality-index--card`}>
			{/* header which shows quality index, poor, fair , good */}
			<header className="flex align-ic mb-md quality-index-header">
				<h3 className="font-static-small">Air Quality Index</h3>

				<p className="font-static-small border-radius-full quality-index__value quality-index__value--good">
					Fair
				</p>
			</header>

			<div className="pt-xmd pb-sm flex align-ic quality-index-body">
				{/* Wind Icons */}
				<TbWind className="text-neutral-200 icon icon--xmedium" />

				<ul className="flex align-ic quality-index-list">
					{/* Gases item */}
					<li className="grid quality-index-list__item">
						<p className="font-static-small quality-index__gas">
							PO25
						</p>

						<p className="text-neutral-200 font-dynamic-large  quality-index__gas-concentration">
							190
						</p>
					</li>

					{/* Gases item */}
					<li className="grid quality-index-list__item">
						<p className="font-static-small quality-index__gas">
							SO2
						</p>

						<p className="text-neutral-200 font-dynamic-large  quality-index__gas-concentration">
							20
						</p>
					</li>

					{/* Gases item */}
					<li className="grid quality-index-list__item">
						<p className="font-static-small quality-index__gas">
							O3
						</p>

						<p className="text-neutral-200 font-dynamic-large  quality-index__gas-concentration">
							60
						</p>
					</li>

					{/* Gases item */}
					<li className="grid quality-index-list__item">
						<p className="font-static-small quality-index__gas">
							NO2
						</p>

						<p className="text-neutral-200 font-dynamic-large  quality-index__gas-concentration">
							80
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default QualityIndexCard;
