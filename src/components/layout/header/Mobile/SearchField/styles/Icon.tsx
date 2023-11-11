import { FunctionComponent, ReactNode } from "react";

export type IconProps = {
	children: ReactNode,
}

export const Icon: FunctionComponent<IconProps> = ({ children }) => {

	return <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
		{children}
		<span className="sr-only">Search icon</span>
	</div>;
};