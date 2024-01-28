import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreSlice.jsx";
import guidanceReducer from "./guidanceSlice.jsx";
import controlSlice from "./controlSlice.jsx";

export const store = configureStore({
	reducer: {
		score: scoreReducer,
		guidance: guidanceReducer,
		control: controlSlice,
	},
});
