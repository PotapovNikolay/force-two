import { Button } from "components/base/Button";
import { Container } from "pages/home/Computers/Computer/Buttons/styles";
import { Palette } from "types/theme/Palette";

export const Buttons = () => {
	return <Container>
		<Button text="Купить"/>
		<Button text="Подробнее" palette={Palette.GRAY}/>
	</Container>;
};