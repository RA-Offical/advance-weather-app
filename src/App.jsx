import "./App.css";
import {
	CurrentWeatherCard,
	HourlyForecast,
	DayForecast,
	HighlightsWeatherCard,
} from "./component";

function App() {
	return (
		<div className="app">
			<main>
				<div className="container grid content-grid">
					<CurrentWeatherCard />
					<DayForecast />
					<HighlightsWeatherCard />
					<HourlyForecast />
				</div>
			</main>
		</div>
	);
}

export default App;
