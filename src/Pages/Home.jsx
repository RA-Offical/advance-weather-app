import {
	Header,
	CurrentWeather,
	HourlyForecast,
	DaysForecast,
	TodayHighlights,
} from "../component";

function Home() {
	return (
		<div className="app">
			<Header />
			<main>
				<div className="container grid content-grid">
					<CurrentWeather />
					<DaysForecast />
					<TodayHighlights />
					<HourlyForecast />
				</div>
			</main>
		</div>
	);
}

export default Home;
