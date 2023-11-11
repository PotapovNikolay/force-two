import { FunctionComponent, ReactNode } from "react";

export type ContainerProps = {
	children: ReactNode,
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {

	return <div className={"flex flex-col items-center mt-16 text-white"}>
		{children}
	</div>;
};

export default Container;