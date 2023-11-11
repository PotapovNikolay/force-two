import { FunctionComponent, ReactNode } from "react";


export type ContainerProps = {
	children?: ReactNode,
	className?: string,
}

export const Container: FunctionComponent<ContainerProps> = ({
	children,
	className,
}) => {
	return <div className={`${className}`}>
		{children}
	</div>;
};

export default Container;