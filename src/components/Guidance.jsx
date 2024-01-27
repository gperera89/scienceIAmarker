import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateLastUpdatedStateAndGuidance } from "../app/guidanceSlice";
import { bioRubric } from "./bioRubric";

function Guidance() {
	const dispatch = useDispatch();
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
	} = useSelector((state) => state.score);
	const guidance = useSelector((state) => state.guidance.guidance);

	const mapValue = (value) => {
		if (value === 1 || value === 2) {
			return 1;
		} else if (value === 3 || value === 4) {
			return 2;
		} else if (value === 5 || value === 6) {
			return 3;
		} else if (value === 0) {
			return 0;
		}
		return null;
	};

	useEffect(() => {
		if (RD1state !== null) {
			const mappedValue = mapValue(RD1state);
			const guidance = bioRubric["Research Question"][mappedValue];
			if (guidance !== undefined) {
				dispatch(
					updateLastUpdatedStateAndGuidance({
						state: "Research Question",
						guidance,
					})
				);
			}
		}
	}, [RD1state, dispatch]);

	useEffect(() => {
		if (RD2state !== null) {
			const mappedValue = mapValue(RD2state);
			const guidance = bioRubric["Method Validity"][mappedValue];
			if (guidance !== undefined) {
				dispatch(
					updateLastUpdatedStateAndGuidance({
						state: "Method Validity",
						guidance,
					})
				);
			}
		}
	}, [RD2state, dispatch]);

	useEffect(() => {
		if (RD3state !== null) {
			const mappedValue = mapValue(RD3state);
			const guidance = bioRubric["Method Reliability"][mappedValue];
			if (guidance !== undefined) {
				dispatch(
					updateLastUpdatedStateAndGuidance({
						state: "Method Reliability",
						guidance,
					})
				);
			}
		}
	}, [RD3state, dispatch]);

	useEffect(() => {
		if (DA1state !== null) {
			const mappedValue = mapValue(DA1state);
			const guidance = bioRubric["Clarity"][mappedValue];
			if (guidance !== undefined) {
				dispatch(
					updateLastUpdatedStateAndGuidance({
						state: "Clarity",
						guidance,
					})
				);
			}
		}
	}, [DA1state, dispatch]);

	useEffect(() => {
		if (DA2state !== null) {
			const mappedValue = mapValue(DA2state);
			const guidance = bioRubric["Uncertainty"][mappedValue];
			if (guidance !== undefined) {
				dispatch(
					updateLastUpdatedStateAndGuidance({
						state: "Uncertainty",
						guidance,
					})
				);
			}
		}
	}, [DA2state, dispatch]);

	useEffect(() => {
		if (DA3state !== null) {
			const mappedValue = mapValue(DA3state);
			const guidance = bioRubric["Processing"][mappedValue];
			if (guidance !== undefined) {
				dispatch(
					updateLastUpdatedStateAndGuidance({
						state: "Processing",
						guidance,
					})
				);
			}
		}
	}, [DA3state, dispatch]);

	useEffect(() => {
		if (Co1state !== null) {
			const mappedValue = mapValue(Co1state);
			const guidance = bioRubric["Justification"][mappedValue];
			if (guidance !== undefined) {
				dispatch(
					updateLastUpdatedStateAndGuidance({
						state: "Justification",
						guidance,
					})
				);
			}
		}
	}, [Co1state, dispatch]);

	useEffect(() => {
		if (Co2state !== null) {
			const mappedValue = mapValue(Co2state);
			const guidance = bioRubric["Scientific Context"][mappedValue];
			if (guidance !== undefined) {
				dispatch(
					updateLastUpdatedStateAndGuidance({
						state: "Scientific Context",
						guidance,
					})
				);
			}
		}
	}, [Co2state, dispatch]);

	useEffect(() => {
		if (Ev1state !== null) {
			const mappedValue = mapValue(Ev1state);
			const guidance = bioRubric["Limitations"][mappedValue];
			if (guidance !== undefined) {
				dispatch(
					updateLastUpdatedStateAndGuidance({
						state: "Limitations",
						guidance,
					})
				);
			}
		}
	}, [Ev1state, dispatch]);

	useEffect(() => {
		if (Ev2state !== null) {
			const mappedValue = mapValue(Ev2state);
			const guidance = bioRubric["Improvements"][mappedValue];
			if (guidance !== undefined) {
				dispatch(
					updateLastUpdatedStateAndGuidance({
						state: "Improvements",
						guidance,
					})
				);
			}
		}
	}, [Ev2state, dispatch]);

	return (
		<>
			<div className='flex items-center justify-center'>
				<p>{guidance}</p>
			</div>
		</>
	);
}

export default Guidance;
