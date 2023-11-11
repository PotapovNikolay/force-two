import { FunctionComponent, ReactNode } from "react";

export type NavProps = {
	children: ReactNode,
}

export const Nav: FunctionComponent<NavProps> = ({ children }) => {

	return <nav
		className={"max-w-screen-4xl flex flex-wrap items-center justify-end p-4 md:mt-4 mt-0 px-4 md:px-10"}>
		{children}
	</nav>;
};