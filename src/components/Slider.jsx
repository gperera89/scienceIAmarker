import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import "./Slider.css";

function Slider({ value, title, updateAction, id }) {
	const dispatch = useDispatch();
	const handleChange = (event) => {
		let inputValue = Number(event.target.value);

		if (inputValue > 6) {
			inputValue = 6;
		} else if (inputValue < 0) {
			inputValue = 0;
		}

		dispatch(updateAction(inputValue));
	};
	return (
		<div className='flex items-start space-x-4'>
			<div className='flex flex-col items-start'>
				<label htmlFor='slider' className='mb-2'>
					{title}
				</label>
				<input
					id={id}
					type='range'
					min='0'
					max='6'
					step='1'
					value={Number(value) || 0}
					onChange={handleChange}
					className='slider-thumb bg-slate-500 appearance-none h-1 rounded-full w-80'
				/>
			</div>
			<div className='flex flex-col items-start my-4'>
				<input
					id='slider-input'
					type='number'
					min='0'
					max='6'
					step='1'
					value={value}
					onChange={handleChange}
					className='border-2 border-gray-900 bg-white h-8 pl-3 rounded-xl text-sm focus:outline-none'
				/>
			</div>
		</div>
	);
}

Slider.propTypes = {
	value: PropTypes.number.isRequired,
	updateAction: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
};

export default Slider;