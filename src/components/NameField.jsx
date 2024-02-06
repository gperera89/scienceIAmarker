import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../app/scoreSlice";

function NameField() {
	const dispatch = useDispatch();
	const name = useSelector((state) => state.score.name);
	const handleNameChange = (e) => {
		dispatch(updateName(e.target.value));
	};

	return (
		<div className='relative rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-slate-500 focus-within:ring-2 focus-within:ring-[#0047AB] dark:focus-within:ring-[#4682B4] w-1/4'>
			{name && (
				<label
					htmlFor='name'
					className={`absolute -top-2 left-2 inline-block bg-white dark:bg-slate-900 px-1 text-xs font-medium text-gray-500`}>
					Name / Candidate Number
				</label>
			)}
			<input
				type='text'
				value={name}
				id='name'
				placeholder='Name / Candidate Number'
				className='block w-full border-0 p-0 text-slate-900 dark:text-white placeholder:text-slate-500 dark:bg-slate-900 focus:ring-0 sm:text-sm sm:leading-6 text-center'
				onChange={handleNameChange}
			/>
		</div>
	);
}

export default NameField;
