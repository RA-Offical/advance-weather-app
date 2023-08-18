import { BiArrowBack } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useEffect, useState, useCallback } from "react";
import URL from "../../data/url";
import fetchData from "../../data-fetching/fetch-data";
import { filterHintList } from "../../data/filterData";
import { useGlobalContext } from "../../Hooks/GlobalContext";
import useCompoentVisbile from "../../Hooks/VisibilityController";

function SearchGroup({ isMobileSearchVisible, setIsMobileSearchVisible }) {
	const {
		getWeatherDataByQuery,
		getWeatherDataByCoordinates,
		setCurrentWeather,
		getHourlyForecast,
		setForecast,
	} = useGlobalContext();

	const [isLoading, setIsLoading] = useState(false);
	const [searchHintList, setSearchHintList] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const { isVisible, setIsVisible, containerRef } = useCompoentVisbile(
		false,
		handleHintListVisibility
	);

	/**
	 *
	 */

	function handleHintListVisibility(e) {
		const target = e.target;

		if (
			target.matches(".search-hintlist__item, .search-hintlist__item *")
		) {
			// for turning off search view if click is happened on list item in mobile mode
			setIsMobileSearchVisible(false);
			// for turning off search list if it is in the computer mode
			setIsVisible(false);
			// making sure list is empty
			setSearchHintList([]);

			//making search input empty
			setSearchInput("");
		} /*if click in desktop view outside of searchbar*/ else if (
			!isMobileSearchVisible &&
			!containerRef.current.contains(target)
		) {
			// for turning off search list if it is in the computer mode
			setIsVisible(false);
		} else if (
			searchHintList.length > 0 &&
			containerRef.current.contains(target)
		) {
			setIsVisible(true);
		}
	}

	/**
	 * function when user does not choose from list
	 */

	const handleSubmit = (e) => {
		// stop form from submitting
		e.preventDefault();

		if (!searchInput) return;
	};

	/**
	 * get data if the click is happended on hint list item
	 */

	const handleHintListItemClick = (e, id) => {
		// functionality
		const { lat, lon } = searchHintList[id];
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

		// if the search input is empty then make the hintlist empty
		if (!searchInput) {
			setSearchHintList([]);
			return;
		}

		// variable just to avoid race condition because of network
		let isCurrent = true;
		setIsLoading(true);
		setIsVisible(true);
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
		// hint present class is used for showing hint list
		// isMobileSearchVisible is use to control showing or hiding search view in mobile mode
		<div
			className={`search-wrapper ${
				searchHintList.length > 0 && isVisible ? "hint-present" : ""
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

					<div className="control" ref={containerRef}>
						<input
							type="search"
							className="search__input"
							placeholder="Search city..."
							autoFocus
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
							onClick={(e) => {
								console.log("click");
							}}
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
