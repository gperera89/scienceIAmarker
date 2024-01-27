import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	lastUpdatedState: null,
	guidance: "Hello world",
};

export const guidanceSlice = createSlice({
	name: "guidance",
	initialState,
	reducers: {
		updateLastUpdatedStateAndGuidance: (state, action) => {
			state.lastUpdatedState = action.payload.state;
			state.guidance = action.payload.guidance;
		},
	},
});

export const { updateLastUpdatedStateAndGuidance } = guidanceSlice.actions;
export default guidanceSlice.reducer;
