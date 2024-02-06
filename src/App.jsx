import Navigation from "./components/Navigation";
import "./App.css";
import Steps from "./components/Steps";
import NameField from "./components/NameField";
import Guidance from "./components/Guidance";
import OverlayText from "./components/OverlayText";
import { useState, useEffect } from "react";
import OverlayTable from "./components/OverlayTable";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const match = window.matchMedia("(prefers-color-scheme: dark)");
		setIsDarkMode(match.matches);
		const changeHandler = (event) => setIsDarkMode(event.matches);
		match.addEventListener("change", changeHandler);
		return () => match.removeEventListener("change", changeHandler);
	}, []);

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [isDarkMode]);

	return (
		<div className={isDarkMode ? "dark" : ""}>
			<div>
				<Navigation />
			</div>
			<div className='flex flex-col items-center justify-center space-y-6'>
				<NameField />
				<div className='h-64'>
					<Steps />
				</div>
			</div>
			<div className='mt-20 flex items-center justify-center '>
				<div className='w-full max-w-xl'>
					<Guidance />
				</div>
			</div>
			<OverlayText />
			<OverlayTable />
		</div>
	);
}

export default App;
