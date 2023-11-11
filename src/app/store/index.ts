"use client";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import header from "store/slices/header";
import { HeaderState } from "store/slices/header/initial/HeaderState";

export type RootState = {
	header: HeaderState
}

export const store = configureStore({
	reducer: {
		header
	}
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;