import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../app/scoreSlice";

function NameField() {
	const dispatch = useDispatch();
	const name = useSelector((state) => state.score.name);
	const handleNameChange = (e) => {
		dispatch(updateName(e.target.value));
	};

	return (
		<div className='rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 w-1/4'>
			<input
				value={name}
				id='name'
				className='block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 text-center'
				placeholder='Name or Candidate Number'
				onChange={handleNameChange}
			/>
		</div>
	);
}

export default NameField;
