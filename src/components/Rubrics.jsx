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

	let meanRDstate = Math.round((RD1state + RD2state + RD3state) / 3);
	let meanDAstate = Math.round((DA1state + DA2state + DA3state) / 3);
	let meanCostate = Math.round((Co1state + Co2state) / 2);
	let meanEvstate = Math.round((Ev1state + Ev2state) / 2);

	return (
		<>
			{/* Item 1 rubsics which is the Research Design Section */}
			{selectedItem === "item1" && (
				<div>
					<div>
						<Slider
							title='Research Question Context'
							value={RD1state}
							updateAction={(newValue) => dispatch(updateRD1(newValue))}
							id={"research-question-slider"}
						/>
					</div>
					<div>
						<Slider
							title='Methodological Considerations'
							value={RD2state}
							updateAction={(newValue) => dispatch(updateRD2(newValue))}
							id={"method-validity-slider"}
						/>
					</div>
					<div>
						<Slider
							title='Description of Methodology'
							value={RD3state}
							updateAction={(newValue) => dispatch(updateRD3(newValue))}
							id={"method-reliability-slider"}
						/>
					</div>
					<div className='flex justify-between'>
						<Textarea
							value={RDCstate}
							updateAction={(newValue) => dispatch(updateRDC(newValue))}
							id={"comment-for-research-design"}
						/>
						<div className='mt-16'>
							<label
								htmlFor='final-RD-input'
								className='block text-sm font-medium text-gray-700'>
								Score
							</label>
							<input
								id='final-RD-input'
								type='number'
								min='0'
								max='6'
								step='1'
								placeholder={meanRDstate}
								value={RDFinal}
								onChange={(e) =>
									dispatch(updateRDFinal(Number(e.target.value)))
								}
								className='border-2 border-gray-900 bg-white h-8 pl-3 rounded-xl text-sm focus:outline-none'
							/>
						</div>
					</div>
				</div>
			)}

			{/* Item 2 rubsics which is the Data Analysis Section */}
			{selectedItem === "item2" && (
				<div>
					<div>
						<Slider
							title='Clarity and Precision'
							value={DA1state}
							updateAction={(newValue) => dispatch(updateDA1(newValue))}
							id={"clarity-slider"}
						/>
					</div>
					<div>
						<Slider
							title='Consideration of Uncertainty'
							value={DA2state}
							updateAction={(newValue) => dispatch(updateDA2(newValue))}
							id={"uncertainty-slider"}
						/>
					</div>
					<div>
						<Slider
							title='Data Processing'
							value={DA3state}
							updateAction={(newValue) => dispatch(updateDA3(newValue))}
							id={"processing-slider"}
						/>
					</div>
					<div className='flex justify-between'>
						<Textarea
							value={DACstate}
							updateAction={(newValue) => dispatch(updateDAC(newValue))}
							id={"comment-for-data-analysis"}
						/>
						<div className='mt-16'>
							<label
								htmlFor='final-DA-input'
								className='block text-sm font-medium text-gray-700'>
								Score
							</label>
							<input
								id='final-DA-input'
								type='number'
								min='0'
								max='6'
								step='1'
								placeholder={meanDAstate}
								value={DAFinal}
								onChange={(e) =>
									dispatch(updateDAFinal(Number(e.target.value)))
								}
								className='border-2 border-gray-900 bg-white h-8 pl-3 rounded-xl text-sm focus:outline-none'
							/>
						</div>
					</div>
				</div>
			)}

			{/* Item 3 rubsics which is the Conclusion Section */}
			{selectedItem === "item3" && (
				<div className='Conclusion Section'>
					<div>
						<Slider
							title='Justification'
							value={Co1state}
							updateAction={(newValue) => dispatch(updateCo1(newValue))}
							id={"justification-slider"}
						/>
					</div>
					<div>
						<Slider
							title='Scientific Context'
							value={Co2state}
							updateAction={(newValue) => dispatch(updateCo2(newValue))}
							id={"scientific-context-slider"}
						/>
					</div>
					<div className='flex justify-between mt-16'>
						<Textarea
							value={CoCstate}
							updateAction={(newValue) => dispatch(updateCoC(newValue))}
							id={"comment-for-conclusion"}
						/>
						<div className='mt-16'>
							<label
								htmlFor='final-Co-input'
								className='block text-sm font-medium text-gray-700'>
								Score
							</label>
							<input
								id='final-Co-input'
								type='number'
								min='0'
								max='6'
								step='1'
								placeholder={meanCostate}
								value={CoFinal}
								onChange={(e) =>
									dispatch(updateCoFinal(Number(e.target.value)))
								}
								className='border-2 border-gray-900 bg-white h-8 pl-3 rounded-xl text-sm focus:outline-none'
							/>
						</div>
					</div>
				</div>
			)}
			{/* Item 3 rubsics which is the Evaluation Section */}
			{selectedItem === "item4" && (
				<div className='Evaluation Section'>
					<div>
						<Slider
							title='Weaknesses and Limitations'
							value={Ev1state}
							updateAction={(newValue) => dispatch(updateEv1(newValue))}
							id={"limitations-slider"}
						/>
					</div>
					<div>
						<Slider
							title='Improvements'
							value={Ev2state}
							updateAction={(newValue) => dispatch(updateEv2(newValue))}
							id={"improvements-slider"}
						/>
					</div>
					<div className='flex justify-between mt-16'>
						<Textarea
							value={EvCstate}
							updateAction={(newValue) => dispatch(updateEvC(newValue))}
							id={"comment-for-evaluation"}
						/>
						<div className='mt-16'>
							<label
								htmlFor='final-Ev-input'
								className='block text-sm font-medium text-gray-700'>
								Score
							</label>
							<input
								id='final-Ev-input'
								type='number'
								min='0'
								max='6'
								step='1'
								value={EvFinal}
								placeholder={meanEvstate}
								onChange={(e) =>
									dispatch(updateEvFinal(Number(e.target.value)))
								}
								className='border-2 border-gray-900 bg-white h-8 pl-3 rounded-xl text-sm focus:outline-none'
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Rubric;
