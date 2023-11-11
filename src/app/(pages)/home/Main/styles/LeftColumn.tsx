import { FunctionComponent, ReactNode } from "react";

type LeftColumnProps = {
	children: ReactNode,
}

export const LeftColumn: FunctionComponent<LeftColumnProps> = ({ children }) => {

	return <div className={"flex flex-col md:w-6/12 z-10"}>
		{children}
	</div>;
};