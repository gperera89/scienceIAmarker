import Slider from "./Slider";
import { useSelector, useDispatch } from "react-redux";
import {
	updateRD1,
	updateRD2,
	updateRD3,
	updateDA1,
	updateDA2,
	updateDA3,
	updateCo1,
	updateCo2,
	updateEv1,
	updateEv2,
	updateRDC,
	updateDAC,
	updateCoC,
	updateEvC,
	updateRDFinal,
	updateDAFinal,
	updateCoFinal,
	updateEvFinal,
} from "../app/scoreSlice";

import Textarea from "./Textarea";

const Rubric = () => {
	const dispatch = useDispatch();
	const selectedItem = useSelector((state) => state.score.selectedItem);
	// Destrcuturing the state from the store
	const {
		RD1: RD1state,
		RD2: RD2state,
		RD3: RD3state,
		DA1: DA1state,
		DA2: DA2state,
		DA3: DA3state,
		Co1: Co1state,
		Co2: Co2state,
		Ev1: Ev1state,
		Ev2: Ev2state,
		RDC: RDCstate,
		DAC: DACstate,
		CoC: CoCstate,
		EvC: EvCstate,
	} = useSelector((state) => state.score);

	const RDFinal = useSelector((state) => state.score.RDFinal);
	const DAFinal = useSelector((state) => state.score.DAFinal);
	const CoFinal = useSelector((state) => state.score.CoFinal);
	const EvFinal = useSelector((state) => state.score.EvFinal);

	return (
		<>
			{/* Item 1 rubsics which is the Research Design Section */}
			{selectedItem === "item1" && (
				<div>
					<Slider
						title='Research Question Context'
						value={RD1state}
						updateAction={(newValue) => dispatch(updateRD1(newValue))}
						id={"research-question-slider"}
					/>
					<Slider
						title='Methodological Considerations'
						value={RD2state}
						updateAction={(newValue) => dispatch(updateRD2(newValue))}
						id={"method-validity-slider"}
					/>
					<Slider
						title='Description of Methodology'
						value={RD3state}
						updateAction={(newValue) => dispatch(updateRD3(newValue))}
						id={"method-reliability-slider"}
					/>
					<div className='flex justify-between'>
						<div className='flex-grow mr-8'>
							<Textarea
								value={RDCstate}
								updateAction={(newValue) => dispatch(updateRDC(newValue))}
								id={"comment-for-research-design"}
							/>
						</div>
						<div className='mt-16'>
							<label
								htmlFor='final-RD-input'
								className='block text-sm font-medium text-slate-900 dark:text-white'>
								Score
							</label>
							<input
								id='final-RD-input'
								type='number'
								min='0'
								max='6'
								step='1'
								value={RDFinal}
								onChange={(e) =>
									dispatch(updateRDFinal(Number(e.target.value)))
								}
								className='border-2 border-slate-900 dark:border-white bg-white dark:bg-slate-900 dark:text-white h-8 pl-3 rounded-xl text-sm focus:outline-none'
							/>
						</div>
					</div>
				</div>
			)}

			{/* Item 2 rubsics which is the Data Analysis Section */}
			{selectedItem === "item2" && (
				<div>
					<Slider
						title='Clarity and Precision'
						value={DA1state}
						updateAction={(newValue) => dispatch(updateDA1(newValue))}
						id={"clarity-slider"}
					/>
					<Slider
						title='Consideration of Uncertainty'
						value={DA2state}
						updateAction={(newValue) => dispatch(updateDA2(newValue))}
						id={"uncertainty-slider"}
					/>
					<Slider
						title='Data Processing'
						value={DA3state}
						updateAction={(newValue) => dispatch(updateDA3(newValue))}
						id={"processing-slider"}
					/>
					<div className='flex justify-between'>
						<div className='flex-grow mr-8'>
							<Textarea
								value={DACstate}
								updateAction={(newValue) => dispatch(updateDAC(newValue))}
								id={"comment-for-data-analysis"}
							/>
						</div>
						<div className='mt-16'>
							<label
								htmlFor='final-DA-input'
								className='block text-sm font-medium  text-slate-900 dark:text-white'>
								Score
							</label>
							<input
								id='final-DA-input'
								type='number'
								min='0'
								max='6'
								step='1'
								value={DAFinal}
								onChange={(e) =>
									dispatch(updateDAFinal(Number(e.target.value)))
								}
								className='border-2 border-slate-900 dark:border-white bg-white dark:bg-slate-900 dark:text-white h-8 pl-3 rounded-xl text-sm focus:outline-none'
							/>
						</div>
					</div>
				</div>
			)}

			{/* Item 3 rubsics which is the Conclusion Section */}
			{selectedItem === "item3" && (
				<div className='Conclusion Section'>
					<Slider
						title='Justification'
						value={Co1state}
						updateAction={(newValue) => dispatch(updateCo1(newValue))}
						id={"justification-slider"}
					/>
					<Slider
						title='Scientific Context'
						value={Co2state}
						updateAction={(newValue) => dispatch(updateCo2(newValue))}
						id={"scientific-context-slider"}
					/>
					<div className='flex justify-between mt-16'>
						<div className='flex-grow mr-8'>
							<Textarea
								value={CoCstate}
								updateAction={(newValue) => dispatch(updateCoC(newValue))}
								id={"comment-for-conclusion"}
							/>
						</div>
						<div className='mt-16'>
							<label
								htmlFor='final-Co-input'
								className='block text-sm font-medium text-slate-900 dark:text-white'>
								Score
							</label>
							<input
								id='final-Co-input'
								type='number'
								min='0'
								max='6'
								step='1'
								value={CoFinal}
								onChange={(e) =>
									dispatch(updateCoFinal(Number(e.target.value)))
								}
								className='border-2 border-slate-900 dark:border-white bg-white dark:bg-slate-900 dark:text-white h-8 pl-3 rounded-xl text-sm focus:outline-none'
							/>
						</div>
					</div>
				</div>
			)}
			{/* Item 3 rubsics which is the Evaluation Section */}
			{selectedItem === "item4" && (
				<div className='Evaluation Section'>
					<Slider
						title='Weaknesses and Limitations'
						value={Ev1state}
						updateAction={(newValue) => dispatch(updateEv1(newValue))}
						id={"limitations-slider"}
					/>
					<Slider
						title='Improvements'
						value={Ev2state}
						updateAction={(newValue) => dispatch(updateEv2(newValue))}
						id={"improvements-slider"}
					/>
					<div className='flex justify-between mt-16'>
						<div className='flex-grow mr-8'>
							<Textarea
								value={EvCstate}
								updateAction={(newValue) => dispatch(updateEvC(newValue))}
								id={"comment-for-evaluation"}
							/>
						</div>
						<div className='mt-16'>
							<label
								htmlFor='final-Ev-input'
								className='block text-sm font-medium  text-slate-900 dark:text-white'>
								Score
							</label>
							<input
								id='final-Ev-input'
								type='number'
								min='0'
								max='6'
								step='1'
								value={EvFinal}
								onChange={(e) =>
									dispatch(updateEvFinal(Number(e.target.value)))
								}
								className='border-2 border-slate-900 dark:border-white bg-white dark:bg-slate-900 dark:text-white h-8 pl-3 rounded-xl text-sm focus:outline-none'
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Rubric;
