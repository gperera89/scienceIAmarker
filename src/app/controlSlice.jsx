import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	exportAsText: false,
	exportAsTable: false,
	criteriaToggle: false,
};

export const controlSlice = createSlice({
	name: "control",
	initialState,
	reducers: {
		updateExportAsText: (state, action) => {
			state.exportAsText = action.payload;
		},
		updateExportAsTable: (state, action) => {
			state.exportAsTable = action.payload;
		},
		updateCriteriaToggle: (state, action) => {
			state.criteriaToggle = action.payload;
		},
	},
});

export const { updateExportAsTable, updateExportAsText, updateCriteriaToggle } =
	controlSlice.actions;
export default controlSlice.reducer;
