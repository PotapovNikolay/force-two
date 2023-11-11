import { FunctionComponent, ReactNode } from "react";

export type ContainerProps = {
	children: ReactNode,
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {

	return <div
		className="flex flex-col space-y-4 md:space-y-0 mt-6 md:mt-10 md:flex-row md:items-center md:justify-between p-4  dark:text-white bg-zinc-700 rounded">
		{children}
	</div>;
};