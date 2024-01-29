import Rubric from "./Rubrics";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { updateSelecteditem } from "../app/scoreSlice";
import { updateExportAsText } from "../app/controlSlice";

const Tabs = () => {
	const dispatch = useDispatch();
	const selectedItem = useSelector((state) => state.score.selectedItem);

	const handleItemClick = (item) => {
		dispatch(updateSelecteditem(item));
	};

	const handleExportAsTextClick = () => {
		dispatch(updateExportAsText(true));
	};

	return (
		<>
			<div className='tabs-container flex'>
				<div className='selection-pane mr-3 flex flex-col items-center'>
					<div
						className={`item ${
							selectedItem === "item1"
								? "active  border-r-2 border-slate-900 font-bold dark:text-white"
								: "text-slate-900 dark:text-white"
						} p-3 hover:font-bold hover:border-r-2 hover: border-slate-900 dark:border-white transition-all duration-100 text-center cursor-pointer w-40 rounded-tl-md rounded-bl-md`}
						onClick={() => handleItemClick("item1")}>
						Research Design
					</div>
					<div
						className={`item ${
							selectedItem === "item2"
								? "active  border-r-2 border-slate-900 font-bold dark:text-white"
								: "text-slate-900 dark:text-white"
						} p-3 hover:font-bold hover:border-r-2 hover: border-slate-900 dark:border-white transition-all duration-100 text-center cursor-pointer w-40 rounded-tl-md rounded-bl-md`}
						onClick={() => handleItemClick("item2")}>
						Data Analysis
					</div>
					<div
						className={`item ${
							selectedItem === "item3"
								? "active  border-r-2 border-slate-900 font-bold dark:text-white"
								: "text-slate-900 dark:text-white"
						} p-3 hover:font-bold hover:border-r-2 hover: border-slate-900 dark:border-white transition-all duration-100 text-center cursor-pointer w-40 rounded-tl-md rounded-bl-md`}
						onClick={() => handleItemClick("item3")}>
						Conclusion
					</div>
					<div
						className={`item ${
							selectedItem === "item4"
								? "active  border-r-2 border-slate-900 font-bold dark:text-white"
								: "text-slate-900 dark:text-white"
						} p-3 hover:font-bold hover:border-r-2 hover: border-slate-900 dark:border-white transition-all duration-100 text-center cursor-pointer w-40 rounded-tl-md rounded-bl-md`}
						onClick={() => handleItemClick("item4")}>
						Evaluation
					</div>
					<div className='flex flex-col my-2'>
						<Button
							buttonName='View Results'
							onClick={handleExportAsTextClick}
						/>
					</div>
				</div>
				<div className='content-pane text-center'>
					<Rubric />
				</div>
			</div>
		</>
	);
};

export default Tabs;
