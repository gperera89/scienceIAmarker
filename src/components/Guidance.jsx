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

	useEffect(() => {
		if (RD1state !== null) {
			const guidance = bioRubric["Research Question"][RD1state];
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
			const guidance = bioRubric["Method Validity"][RD2state];
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
			const guidance = bioRubric["Method Reliability"][RD3state];
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
			const guidance = bioRubric["Clarity"][DA1state];
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
			const guidance = bioRubric["Uncertainty"][DA2state];
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
			const guidance = bioRubric["Processing"][DA3state];
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
			const guidance = bioRubric["Justification"][Co1state];
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
			const guidance = bioRubric["Scientific Context"][Co2state];
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
			const guidance = bioRubric["Limitations"][Ev1state];
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
			// const mappedValue = mapValue(Ev2state);
			const guidance = bioRubric["Improvements"][Ev2state];
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
			<div className='flex items-center justify-center text-slate-900 dark:text-white'>
				<p>{guidance}</p>
			</div>
		</>
	);
}

export default Guidance;
