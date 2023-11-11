import { FunctionComponent, ReactNode } from "react";

export type ContainerProps = {
	children: ReactNode,
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {

	return <nav className={"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"}>
		{children}
	</nav>;
};