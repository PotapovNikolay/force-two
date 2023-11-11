import { FunctionComponent, } from "react";

type BageProps = {
	title: string,
	text: () => JSX.Element
}
export const Bage: FunctionComponent<BageProps> = ({ title, text }) => {

	return <div className={"flex flex-col "}>
		<h2 className={"text-2xl font-bold"}>
			{title}
		</h2>
		{text()}
	</div>;
};