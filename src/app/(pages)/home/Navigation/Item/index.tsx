import { Indicator } from "components/base/Indicator";
import Image from "next/image";
import { Lines } from "pages/home/Navigation/Item/Lines";
import { Button, Title, TitleImageContainer } from "pages/home/Navigation/Item/styles";
import { FunctionComponent } from "react";

type ItemProps = {
	title: string,
	icon: string
}

export const Item: FunctionComponent<ItemProps> = ({ title, icon }) => {

	return <Button>
		<Indicator/>
		<TitleImageContainer>
			<Title title={title}/>
			<Image src={icon} alt={icon} width={40} height={40}
			       className={"fill-gray-400 relative z-10 group-hover:fill-white w-7 md:w-9"}/>
		</TitleImageContainer>
		<Lines/>
	</Button>;
};