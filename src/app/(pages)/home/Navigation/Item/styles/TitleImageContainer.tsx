import { FunctionComponent, ReactNode } from "react";

export type TitleImageContainerProps = {
	children: ReactNode,
}

export const TitleImageContainer: FunctionComponent<TitleImageContainerProps> = ({ children }) => {

	return <div className={"flex flex-col items-center space-y-4"}>
		{children}
	</div>;
};