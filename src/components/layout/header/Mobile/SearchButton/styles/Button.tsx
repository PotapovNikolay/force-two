import { FunctionComponent, ReactNode } from "react";

export type ButtonProps = {
	children: ReactNode,
}

export const Button: FunctionComponent<ButtonProps> = ({ children }) => {

	return <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false"
								 className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
		{children}
		<span className="sr-only">Search</span>
	</button>;
};