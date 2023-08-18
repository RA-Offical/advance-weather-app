import logoImg from "../../assets/logo.png";
import { TbCurrentLocation } from "react-icons/tb";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { SearchGroup } from "../";
import { useState } from "react";
import { useGlobalContext } from "../../Hooks/GlobalContext";

function Header() {
	const { setLocationCoordinates } = useGlobalContext();

	const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);

	// getting current location coordinates
	const getCurrentLocationCoordinates = () => {
		navigator.geolocation.getCurrentPosition((e) => {
			const { latitude: lat, longitude: lon } = e.coords;
			setLocationCoordinates({ lat, lon });
		});
	};

	return (
		<header className="header">
			<div className="container pt-lg pb-lg flex align-ic">
				<a href="#" className="logo">
					<img src={logoImg} className="logo__img" alt="watherio" />
				</a>

				{/* Search Group component */}
				<SearchGroup
					isMobileSearchVisible={isMobileSearchVisible}
					setIsMobileSearchVisible={setIsMobileSearchVisible}
				/>

				<div className="flex header-buttons">
					{/* button search toggler */}
					<button
						className="btn btn__search--toggler"
						onClick={(e) => setIsMobileSearchVisible(true)}
					>
						<PiMagnifyingGlassBold className="icon icon--small" />
					</button>

					{/* button location */}
					<button
						className="btn btn--primary btn--location"
						onClick={getCurrentLocationCoordinates}
					>
						<TbCurrentLocation className="icon icon--small" />

						<span className="btn--location__text">
							Current Location
						</span>
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
