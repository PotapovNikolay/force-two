import { Item } from "pages/home/Navigation/Item";
import { Container } from "pages/home/Navigation/styles/Container";

export const Navigation = () => {

	const base = "/icons/navigation/";
	const navigation = [
		{ title: "Сборки", icon: base + "pc-display.svg" },
		{ title: "Кастомизация", icon: base + "sliders.svg" },
		{ title: "Отзывы", icon: base + "hand-thumbs-up.svg" }];

	return <Container>
		{navigation.map(({ title, icon }, key) => {
			return <Item key={key} title={title} icon={icon}/>;
		})}
	</Container>;
};