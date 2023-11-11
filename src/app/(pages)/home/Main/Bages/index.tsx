import arrow from "assets/icons/arrows/arrow-right-short.svg";
import { Button } from "components/base/Button";
import { DIRECTION } from "enums/Direction";
import { Bage, Container } from "pages/home/Main/Bages/styles";
import { FunctionComponent } from "react";

export const Bages: FunctionComponent = () => {

	const bages = [
		{
			title: "2430",
			text: () => <h6 className={"text-gray-300 font-light mtext-sm"}>Проданных компьютеров</h6>
		},
		{
			title: "95%",
			text: () => <h6 className={"text-gray-300 font-light text-sm"}>Людей покупают здесь снова</h6>
		}];

	return <Container>
		{bages.map(({ title, text }, key) => {
			return <Bage key={key} title={title} text={text}/>;
		})}
		<Button text={"Выбрать"} icon={arrow} direction={DIRECTION.RIGHT}/>
	</Container>;
};