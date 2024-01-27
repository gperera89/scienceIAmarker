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

	return (
		<>
			{/* Item 1 rubsics which is the Research Design Section */}
			{selectedItem === "item1" && (
				<div>
					<div>
						<Slider
							title='Research Question'
							value={RD1state}
							updateAction={(newValue) => dispatch(updateRD1(newValue))}
							id={"research-question-slider"}
						/>
					</div>
					<div>
						<Slider
							title='Method Validity'
							value={RD2state}
							updateAction={(newValue) => dispatch(updateRD2(newValue))}
							id={"method-validity-slider"}
						/>
					</div>
					<div>
						<Slider
							title='Method Reliability'
							value={RD3state}
							updateAction={(newValue) => dispatch(updateRD3(newValue))}
							id={"method-reliability-slider"}
						/>
					</div>
					<Textarea
						value={RDCstate}
						updateAction={(newValue) => dispatch(updateRDC(newValue))}
						id={"comment-for-research-design"}
					/>
				</div>
			)}

			{/* Item 2 rubsics which is the Data Analysis Section */}
			{selectedItem === "item2" && (
				<div>
					<div>
						<Slider
							title='Clarity'
							value={DA1state}
							updateAction={(newValue) => dispatch(updateDA1(newValue))}
							id={"clarity-slider"}
						/>
					</div>
					<div>
						<Slider
							title='Uncertainty'
							value={DA2state}
							updateAction={(newValue) => dispatch(updateDA2(newValue))}
							id={"uncertainty-slider"}
						/>
					</div>
					<div>
						<Slider
							title='Processing'
							value={DA3state}
							updateAction={(newValue) => dispatch(updateDA3(newValue))}
							id={"processing-slider"}
						/>
					</div>
					<Textarea
						value={DACstate}
						updateAction={(newValue) => dispatch(updateDAC(newValue))}
						id={"comment-for-data-analysis"}
					/>
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
					<Textarea
						value={CoCstate}
						updateAction={(newValue) => dispatch(updateCoC(newValue))}
						id={"comment-for-conclusion"}
					/>
				</div>
			)}
			{/* Item 3 rubsics which is the Evaluation Section */}
			{selectedItem === "item4" && (
				<div className='Evaluation Section'>
					<div>
						<Slider
							title='Limitations'
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
					<Textarea
						value={EvCstate}
						updateAction={(newValue) => dispatch(updateEvC(newValue))}
						id={"comment-for-evaluation"}
					/>
				</div>
			)}
		</>
	);
};

export default Rubric;
