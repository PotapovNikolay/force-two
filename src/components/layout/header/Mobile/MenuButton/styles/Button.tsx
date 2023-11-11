import { FunctionComponent, ReactNode } from "react";

export type ButtonProps = {
	children: ReactNode,
	action: () => void
}

export const Button: FunctionComponent<ButtonProps> = ({ children, action }) => {

	return <button onClick={action} data-collapse-toggle="navbar-search" type="button"
	               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
	               aria-controls="navbar-search" aria-expanded="false">
		<span className="sr-only">Open main menu</span>
		{children}
	</button>;
};