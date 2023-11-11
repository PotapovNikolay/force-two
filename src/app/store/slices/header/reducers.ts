import { HeaderState } from "@/app/store/slices/header/initial/HeaderState";

export const toggleMenu = (state: HeaderState) => {
	state.isOpenMenu = !state.isOpenMenu;
};