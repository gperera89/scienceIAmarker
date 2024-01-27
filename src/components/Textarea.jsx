import PropTypes from "prop-types";
function Textarea({ id, value, updateAction }) {
	const handleChange = (event) => {
		updateAction(event.target.value);
	};

	return (
		<div>
			<div className='mt-2'>
				<textarea
					rows={4}
					name='comment'
					id={id}
					className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					placeholder={"Add your comment here..."}
					value={value}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
}

Textarea.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	updateAction: PropTypes.func.isRequired,
};
export default Textarea;
