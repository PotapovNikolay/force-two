"use client";

import { FunctionComponent, ReactNode } from "react";
import useStore from "store/hooks/useStore";

export type ContainerProps = {
	children: ReactNode,
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
	const isOpenMenu = useStore("header", "isOpenMenu");

	return <div
		className={`items-center justify-between ${isOpenMenu ? "" : "hidden"} w-full md:flex md:w-auto md:order-1`}>
		{children}
	</div>;
};