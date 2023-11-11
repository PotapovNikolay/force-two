import { FunctionComponent } from "react";

type TitleProps = {
	title: string,
}

export const Title: FunctionComponent<TitleProps> = ({ title }) => {

	return <div className={"text-gray-400 font-medium text-sm md:text-base group-hover:text-white "}> {title}</div>;
};