import Navigation from "./components/Navigation";
import "./App.css";
import Steps from "./components/Steps";
import NameField from "./components/NameField";
import Guidance from "./components/Guidance";

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
