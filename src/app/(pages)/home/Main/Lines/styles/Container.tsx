import { FunctionComponent, ReactNode } from "react";

type ContainerProps = {
	children: ReactNode,
	styles?: string
}

export const Container: FunctionComponent<ContainerProps> = ({ children, styles }) => {

	return <div className={"hidden md:block absolute inset-0 w-full h-full z-0 " + styles}>
		{children}
	</div>;
};