import { FunctionComponent, ReactNode } from "react";

export type ContainerProps = {
	children: ReactNode,
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {

	return <div className="flex justify-center bg-main-900 mt-6 md:mt-0 md:pb-8">
		{children}
	</div>;
};