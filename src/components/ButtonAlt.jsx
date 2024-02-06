import PropTypes from "prop-types";

const ButtonAlt = ({ buttonName, onClick }) => {
	return (
		<a
			href='#'
			onClick={onClick}
			className='relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-slate-900 dark:text-white transition duration-50 ease-out border-2 border-[#0047AB] rounded-full shadow-md group'>
			<span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#0047AB] group-hover:translate-x-0 ease'>
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
				</svg>
			</span>
			<span className='absolute flex items-center justify-center w-full h-full text-slate-900 dark:text-white transition-all duration-50 transform group-hover:translate-x-full ease'>
				{buttonName}
			</span>
			<span className='relative invisible'>{buttonName}</span>
		</a>
	);
};

ButtonAlt.propTypes = {
	buttonName: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};
export default ButtonAlt;
