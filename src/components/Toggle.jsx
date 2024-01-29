import { Switch } from "@headlessui/react";
import { useSelector } from "react-redux";
import { updateCriteriaToggle } from "../app/controlSlice";
import { useDispatch } from "react-redux";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Toggle() {
	const dispatch = useDispatch();
	const criteriaToggle = useSelector((state) => state.control.criteriaToggle);

	return (
		<Switch.Group as='div' className='flex items-center'>
			<Switch
				checked={criteriaToggle}
				onChange={() => dispatch(updateCriteriaToggle(!criteriaToggle))}
				className={classNames(
					criteriaToggle
						? "bg-[#4682B4] dark:bg-[#0047AB]"
						: "bg-[#4682B4] dark:bg-[#0047AB]",
					"relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
				)}>
				<span
					aria-hidden='true'
					className={classNames(
						criteriaToggle ? "translate-x-5" : "translate-x-0",
						"pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
					)}
				/>
			</Switch>
			<Switch.Label as='span' className='ml-3 text-sm'>
				<span className='font-medium text-slate-100'>Criteria</span>
			</Switch.Label>
		</Switch.Group>
	);
}
