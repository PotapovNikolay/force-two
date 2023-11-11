import { FunctionComponent, ReactNode } from "react";

export type ContainerProps = {
	children: ReactNode
	isBreak: boolean
}

export const Container: FunctionComponent<ContainerProps> = ({ children, isBreak }) => {

	return <div
		className={"w-full h-full flex flex-row justify-between relative  bg-main-900 rounded-xl my-10 " + ` ${isBreak && " break-after-column"}`}>
		{children}
	</div>;
};

export default Container;