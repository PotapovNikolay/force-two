import { FunctionComponent, ReactNode } from "react";

type TitleProps = {
	children: ReactNode,
}

export const Title: FunctionComponent<TitleProps> = ({ children }) => {
	return <h1 className={"text-white text-4xl uppercase"}>
		{children}
	</h1>;
};