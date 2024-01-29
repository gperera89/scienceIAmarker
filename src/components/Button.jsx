import PropTypes from "prop-types";

const Button = ({ buttonName, onClick }) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className='rounded-md  px-3.5 py-2.5 bg-[#0047AB] dark:bg-[#4682B4]  text-sm font-semibold text-white dark:text-slate-900 shadow-sm hover:bg-[#4682B4] dark:hover:bg-[#0047AB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047AB] dark:focus-visible:outline-[#4682B4]'>
			{buttonName}
		</button>
	);
};

Button.propTypes = {
	buttonName: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};
export default Button;
