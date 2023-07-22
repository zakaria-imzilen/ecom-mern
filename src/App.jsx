import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{routes.public.map((route) => (
					<Route key={route.id} element={<route.element />} path={route.path} />
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
