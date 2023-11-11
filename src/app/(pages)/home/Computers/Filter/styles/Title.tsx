import { Indicator } from "components/base/Indicator";
import { FunctionComponent } from "react";

type TitleProps = {
	text: string
}

export const Title: FunctionComponent<TitleProps> = ({ text }) => {
	return <div className={"flex flex-col items-center group cursor-pointer"}>
		<Indicator/>
		<h3 className="text-xl mt-3 uppercase">
			{text}
		</h3>
	</div>;
};