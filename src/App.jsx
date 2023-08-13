import "./App.css";
import { CurrentWeatherCard, ForecastWeatherCard } from "./component";

function App() {
	return (
		<div className="app">
			<main>
				<div className="container grid content-grid">
					<CurrentWeatherCard />
					<ForecastWeatherCard />
				</div>
			</main>
		</div>
	);
}

export default App;
