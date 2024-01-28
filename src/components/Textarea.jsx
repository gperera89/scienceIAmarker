import PropTypes from "prop-types";
function Textarea({ id, value, updateAction }) {
	const handleChange = (event) => {
		updateAction(event.target.value);
	};

	return (
		<textarea
			rows={4}
			name='comment'
			id={id}
			className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm sm:leading-6 mr-4'
			placeholder={"Add your comment here..."}
			value={value}
			onChange={handleChange}
		/>
	);
}

Textarea.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	updateAction: PropTypes.func.isRequired,
};
export default Textarea;
