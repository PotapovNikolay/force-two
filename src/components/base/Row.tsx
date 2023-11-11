import { FunctionComponent, ReactNode } from "react";

export type RowProps = {
	children: ReactNode,
	style?: string
}

export const Row: FunctionComponent<RowProps> = ({ children, style }) => {

	return <div className={"flex flex-row " + style}>
		{children}
	</div>;
};