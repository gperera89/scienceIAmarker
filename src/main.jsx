import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Contact from "./pages/Contact.jsx";
import HowTo from "./pages/HowTo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/how-to' element={<HowTo />} />
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>
);
