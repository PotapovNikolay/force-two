import { FunctionComponent, ReactNode } from "react";

export type ContainerProps = {
	children: ReactNode,
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {

	return <div className="hidden md:flex flex-row justify-center absolute bottom-0">
		{children}
	</div>;
};