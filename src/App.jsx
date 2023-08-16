import "./App.css";
import {
	Header,
	CurrentWeather,
	HourlyForecast,
	DaysForecast,
	TodayHighlights,
	Error,
} from "./component";

function App() {
	return <Error />;

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

export default App;
