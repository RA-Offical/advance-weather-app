import "./App.css";
import {
	CurrentWeatherCard,
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
				</div>
			</main>
		</div>
	);
}

export default App;
