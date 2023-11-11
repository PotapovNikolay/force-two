import { FunctionComponent, ReactNode } from "react";

export type TransitionsProps = {
	children?: ReactNode,
	before?: string,
	after?: string,
	common?: string,
	condition?: boolean,
}

export const TransitionContainer = ({
	before,
	after,
	common,
}: Omit<TransitionsProps, "children" | "condition">) => {
	const Transition: FunctionComponent<Pick<TransitionsProps, "children" | "condition">> = ({
		children, condition
	}) => {
		
		const classes = condition ? after : before;
		
		return <div className={` ${common} ${classes} transition-transform duration-300`}>
			{children}
		</div>;
	};
	
	return Transition;
};

export default TransitionContainer;