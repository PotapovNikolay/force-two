import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "store/slices/header/initial/initialState";

import * as reducers from "./reducers";

const slice = createSlice({
	name: "header",
	initialState,
	reducers,
});

export const { actions: headerActions } = slice;

export default slice.reducer;