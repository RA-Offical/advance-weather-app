import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Error } from "./component";
import Home from "./Pages/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App;
