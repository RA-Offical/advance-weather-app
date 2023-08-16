import { BiArrowBack } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { PiMagnifyingGlassBold } from "react-icons/pi";

import { useState } from "react";

function SearchGroup({ isMobileSearchVisible, setIsMobileSearchVisible }) {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div
			className={`search-wrapper ${!isLoading ? "hint-present" : ""} ${
				isMobileSearchVisible ? "" : "hidden"
			}`}
		>
			{/* input search group */}
			<div className="search-group">
				{/* button search */}
				<button className="btn btn--search">
					<PiMagnifyingGlassBold className="icon icon--small" />
				</button>

				{/* button back */}
				<button
					className="btn btn--back"
					onClick={(e) => {
						setIsMobileSearchVisible(false);
					}}
				>
					<BiArrowBack className="icon icon--small" />
				</button>

				{/* input */}
				<div className="control">
					<input
						type="search"
						className="search__input"
						placeholder="Search city..."
						autoFocus
					/>

					{/* loader */}

					{isLoading && <div className="spinner"></div>}
				</div>
			</div>

			{/* hint list */}
			<ul className="search-hintlist">
				{/* hint item */}
				<li className="flex  search-hintlist__item">
					{/* location icon */}
					<FaLocationDot className="icon icon--small text-neutral-200 hint__location--icon" />

					<div className="search-hintlist-content-container">
						{/* hint location name */}
						<h2 className="text-neutral-200 font-static-small">
							Washington
						</h2>

						{/* hint actual location */}
						<p className="font-static-xsmall">England, GB</p>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default SearchGroup;
