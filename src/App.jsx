import Navigation from "./components/Navigation";
import "./App.css";
import Steps from "./components/Steps";
import NameField from "./components/NameField";
import Guidance from "./components/Guidance";
import OverlayText from "./components/OverlayText";
import DarkModeSwitch from "./components/DarkModeSwitch";
import { useState, useEffect } from "react";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [isDarkMode]);

	return (
		<div>
			<DarkModeSwitch
				enableDark={isDarkMode}
				onToggle={() => setIsDarkMode((prevMode) => !prevMode)}
			/>
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
		</div>
	);
}

export default App;
