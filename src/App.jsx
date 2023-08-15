import "./App.css";
import {
	CurrentWeather,
	HourlyForecast,
	DaysForecast,
	TodayHighlights,
} from "./component";

function App() {
	return (
		<div className="app">
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

export default App;
