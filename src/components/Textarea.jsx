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
			className='block w-full rounded-md border-0 py-1.5 dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-slate-900 dark:focus:ring-[#4682B4] sm:text-sm sm:leading-6 mr-4'
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
