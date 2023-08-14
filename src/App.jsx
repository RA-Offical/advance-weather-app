import "./App.css";
import {
	CurrentWeatherCard,
	CurrentWeatherDayStats,
	ForecastWeatherCard,
	HighlightsWeatherCard,
} from "./component";

function App() {
	return (
		<div className="app">
			<main>
				<div className="container grid content-grid">
					<CurrentWeatherCard />
					<ForecastWeatherCard />
					<HighlightsWeatherCard />
					<CurrentWeatherDayStats />
				</div>
			</main>
		</div>
	);
}

export default App;
