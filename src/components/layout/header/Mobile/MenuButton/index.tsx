"use client";


import { Button, Menu } from "components/layout/header/Mobile/MenuButton/styles";
import { FunctionComponent } from "react";
import { headerActions } from "store/slices/header";

import { useAppDispatch } from "@/app/store";

export const MenuButton: FunctionComponent = () => {
	const dispatch = useAppDispatch();
	const toggleMenu = () => dispatch(headerActions.toggleMenu());

	return <Button action={toggleMenu}>
		<Menu/>
	</Button>;
};