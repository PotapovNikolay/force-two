import { FunctionComponent, ReactNode } from "react";

export type ContainerProps = {
	children: ReactNode,
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {

	return <div className={"flex flex-row space-x-16 justify-center mt-10"}>
		{children}
	</div>;
};

export default Container;