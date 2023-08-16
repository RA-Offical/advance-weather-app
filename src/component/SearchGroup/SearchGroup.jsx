import { BiArrowBack } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useEffect, useState, useCallback } from "react";
import URL from "../../data/url";
import fetchData from "../../data-fetching/fetch-data";
import { filterHintList } from "../../data/filterData";
import { useGlobalContext } from "../../Hooks/GlobalContext";

function SearchGroup({ isMobileSearchVisible, setIsMobileSearchVisible }) {
	const { getWeatherDataByQuery, getWeatherDataByCoordinates } =
		useGlobalContext();

	const [isLoading, setIsLoading] = useState(false);
	const [searchHintList, setSearchHintList] = useState([]);
	const [searchInput, setSearchInput] = useState("");

	/**
	 * function when user does not choose from list
	 */

	const handleSubmit = (e) => {
		// stop form from submitting
		e.preventDefault();

		if (!searchInput) return;

		// get weather data by query
		getWeatherDataByQuery(searchInput);
	};

	/**
	 * get data if the click is happended on hint list item
	 */

	const handleHintListItemClick = (e, id) => {
		e.stopPropagation();

		// functionality
		const { lat, lon } = searchHintList[id];

		getWeatherDataByCoordinates(lat, lon);
	};

	/**
	 * function to get hint list
	 */
	const getHintList = useCallback(async (query) => {
		return await fetchData(URL.getHintList(query));
	}, []);

	/**
	 * Everytime the search input changes render the hint list
	 */
	useEffect(() => {
		// making sure loading is always false
		setIsLoading(false);
		if (!searchInput) return;

		// variable just to avoid race condition because of network
		let isCurrent = true;
		setIsLoading(true);
		// getting hint list
		getHintList(searchInput).then((data) => {
			const filteredHintList = filterHintList(data);

			// setting hint list
			if (isCurrent) {
				setIsLoading(false);
				setSearchHintList(filteredHintList);
			}
		});

		return () => {
			isCurrent = false;
		};
	}, [searchInput]);

	return (
		<div
			className={`search-wrapper ${
				searchHintList.length > 0 ? "hint-present" : ""
			} ${isMobileSearchVisible ? "" : "hidden"}`}
		>
			{/* input search group */}
			<form onSubmit={handleSubmit}>
				<div className="search-group">
					{/* button search */}
					<button className="btn btn--search">
						<PiMagnifyingGlassBold className="icon icon--small" />
					</button>

					{/* button back */}
					<button
						type="button"
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
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
						/>

						{/* loader */}

						{isLoading && <div className="spinner"></div>}
					</div>
				</div>
			</form>

			{/* hint list */}
			<ul className="search-hintlist">
				{searchHintList.map(({ id, name, country, state }) => {
					return (
						//  {/* hint item */}
						<li
							key={id}
							className="flex  search-hintlist__item"
							onClick={(e) => {
								handleHintListItemClick(e, id);
							}}
						>
							{/* location icon */}
							<FaLocationDot className="icon icon--small text-neutral-200 hint__location--icon" />

							<div className="search-hintlist-content-container">
								{/* hint location name */}
								<h2 className="text-neutral-200 font-static-small">
									{name}
								</h2>

								{/* hint actual location */}
								<p className="font-static-xsmall">
									{state}, {country}
								</p>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default SearchGroup;
