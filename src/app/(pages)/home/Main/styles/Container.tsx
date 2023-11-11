import { FunctionComponent, ReactNode } from "react";

type ContainerProps = {
	children: ReactNode,
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {

	return <div className="flex flex-row items-center p-4 md:px-32 md:h-[80vh] relative ">
		{children}
	</div>;
};