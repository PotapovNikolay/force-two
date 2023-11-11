import { FunctionComponent, ReactNode } from "react";

export type ButtonProps = {
	children: ReactNode,
	action?: () => void
}

export const Button: FunctionComponent<ButtonProps> = ({ children, action }) => {

	return <button onClick={action}
	               className={"flex flex-col items-center group relative w-1/4 md:w-1/6 py-8 space-y-4"}>
		{children}
	</button>;
};