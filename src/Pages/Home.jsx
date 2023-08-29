import { useGlobalContext } from "../Hooks/GlobalContext";
import { Loader } from "../component";
import {
	Header,
	CurrentWeather,
	HourlyForecast,
	DaysForecast,
	TodayHighlights,
} from "../component";

function Home() {
	const { isLoading } = useGlobalContext();

	return (
		<div className="app">
			<Header />
			<main>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<div className="container grid content-grid">
							<div className="grid content-grid-left-section">
								<CurrentWeather />
								<DaysForecast />
							</div>
							<div className="grid content-grid-right-section">
								<TodayHighlights />
								<HourlyForecast />
							</div>
						</div>
					</>
				)}
			</main>
		</div>
	);
}

export default Home;
