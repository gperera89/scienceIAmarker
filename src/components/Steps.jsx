import Rubric from "./Rubrics";
import { useSelector, useDispatch } from "react-redux";
import { updateSelecteditem } from "../app/scoreSlice";

const Tabs = () => {
	const dispatch = useDispatch();
	const selectedItem = useSelector((state) => state.score.selectedItem);

	const handleItemClick = (item) => {
		dispatch(updateSelecteditem(item));
	};

	return (
		<div className='tabs-container flex'>
			<div className='selection-pane mr-3 flex flex-col items-center'>
				<div
					className={`item ${
						selectedItem === "item1"
							? "active text-blue-500 border-r border-blue-500 font-bold"
							: "text-black"
					} p-3 hover:bg-gray-200 transition-colors duration-200 text-center cursor-pointer w-40 rounded-tl-2xl rounded-bl-2xl`}
					onClick={() => handleItemClick("item1")}>
					Research Design
				</div>
				<div
					className={`item ${
						selectedItem === "item2"
							? "active text-blue-500 border-r border-blue-500 font-bold"
							: "text-black"
					} p-3 hover:bg-gray-200 transition-colors duration-200 text-center cursor-pointer w-40 rounded-tl-2xl rounded-bl-2xl`}
					onClick={() => handleItemClick("item2")}>
					Data Analysis
				</div>
				<div
					className={`item ${
						selectedItem === "item3"
							? "active text-blue-500 border-r border-blue-500 font-bold"
							: "text-black"
					} p-3 hover:bg-gray-200 transition-colors duration-200 text-center cursor-pointer w-40 rounded-tl-2xl rounded-bl-2xl`}
					onClick={() => handleItemClick("item3")}>
					Conclusion
				</div>
				<div
					className={`item ${
						selectedItem === "item4"
							? "active text-blue-500 border-r border-blue-500 font-bold"
							: "text-black"
					} p-3 hover:bg-gray-200 transition-colors duration-200 text-center cursor-pointer w-40 rounded-tl-2xl rounded-bl-2xl`}
					onClick={() => handleItemClick("item4")}>
					Evaluation
				</div>
			</div>
			<div className='content-pane text-center'>
				<Rubric />
			</div>
		</div>
	);
};

export default Tabs;
