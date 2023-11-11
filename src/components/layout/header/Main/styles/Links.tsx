"use client";
import { FunctionComponent, ReactNode } from "react";

export type LinksProps = {
	children: ReactNode,
}

export const Links: FunctionComponent<LinksProps> = ({ children }) => {

	return <ul
		className="flex  p-4  font-medium  rounded-lg flex-row space-x-4 mx-auto">
		{children}
	</ul>;
};