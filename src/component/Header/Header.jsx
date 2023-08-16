import logoImg from "../../assets/logo.png";
import { TbCurrentLocation } from "react-icons/tb";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { SearchGroup } from "../";
import { useState } from "react";

function Header() {
	const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(true);

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
					<button className="btn btn--primary btn--location">
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
