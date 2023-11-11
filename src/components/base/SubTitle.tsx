import { FunctionComponent, ReactNode } from "react";

type SubTitleProps = {
	children: ReactNode,
}

export const SubTitle: FunctionComponent<SubTitleProps> = ({ children }) => {
	return <h3 className={"text-zinc-300 "}>
		{children}
	</h3>;
};