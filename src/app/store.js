import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreSlice.jsx";
import guidanceReducer from "./guidanceSlice.jsx";

export const store = configureStore({
	reducer: {
		score: scoreReducer,
		guidance: guidanceReducer,
	},
});
