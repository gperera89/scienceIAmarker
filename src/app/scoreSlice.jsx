import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	RD1: 0,
	RD2: 0,
	RD3: 0,
	RDC: "",
	DA1: 0,
	DA2: 0,
	DA3: 0,
	DAC: "",
	Co1: 0,
	Co2: 0,
	CoC: "",
	Ev1: 0,
	Ev2: 0,
	EvC: "",
	name: "",
	selectedItem: "item1",
	RDFinal: 0,
	DAFinal: 0,
	CoFinal: 0,
	EvFinal: 0,
};

export const scoreSlice = createSlice({
	name: "score",
	initialState,
	reducers: {
		updateRD1: (state, action) => {
			return {
				...state,
				RD1: action.payload,
			};
		},
		updateRD2: (state, action) => {
			return {
				...state,
				RD2: action.payload,
			};
		},
		updateRD3: (state, action) => {
			return {
				...state,
				RD3: action.payload,
			};
		},
		updateRDC: (state, action) => {
			return {
				...state,
				RDC: action.payload,
			};
		},
		updateDA1: (state, action) => {
			return {
				...state,
				DA1: action.payload,
			};
		},
		updateDA2: (state, action) => {
			return {
				...state,
				DA2: action.payload,
			};
		},
		updateDA3: (state, action) => {
			return {
				...state,
				DA3: action.payload,
			};
		},
		updateDAC: (state, action) => {
			return {
				...state,
				DAC: action.payload,
			};
		},
		updateCo1: (state, action) => {
			return {
				...state,
				Co1: action.payload,
			};
		},
		updateCo2: (state, action) => {
			return {
				...state,
				Co2: action.payload,
			};
		},
		updateCoC: (state, action) => {
			return {
				...state,
				CoC: action.payload,
			};
		},
		updateEv1: (state, action) => {
			return {
				...state,
				Ev1: action.payload,
			};
		},
		updateEv2: (state, action) => {
			return {
				...state,
				Ev2: action.payload,
			};
		},
		updateEvC: (state, action) => {
			return {
				...state,
				EvC: action.payload,
			};
		},
		updateName: (state, action) => {
			return {
				...state,
				name: action.payload,
			};
		},
		updateRDFinal: (state, action) => {
			state.RDFinal = action.payload;
		},
		updateDAFinal: (state, action) => {
			state.DAFinal = action.payload;
		},
		updateCoFinal: (state, action) => {
			state.CoFinal = action.payload;
		},
		updateEvFinal: (state, action) => {
			state.EvFinal = action.payload;
		},
		updateSelecteditem: (state, action) => {
			state.selectedItem = action.payload;
		},
	},
});

export const {
	updateRD1,
	updateRD2,
	updateRD3,
	updateRDC,
	updateDA1,
	updateDA2,
	updateDA3,
	updateDAC,
	updateCo1,
	updateCo2,
	updateCoC,
	updateEv1,
	updateEv2,
	updateEvC,
	updateName,
	updateRDFinal,
	updateDAFinal,
	updateCoFinal,
	updateEvFinal,
	updateSelecteditem,
} = scoreSlice.actions;
export default scoreSlice.reducer;
