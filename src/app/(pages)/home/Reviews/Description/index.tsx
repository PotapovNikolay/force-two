import { Button } from "components/base/Button";
import { SubTitle } from "components/base/SubTitle";
import { Title } from "components/base/Title";
import { Container } from "pages/home/Reviews/Description/styles";

export const Description = () => {

	return <Container>
		<div>
			<Title>
				Отзывы
			</Title>
			<SubTitle>
				Мы рады если <br/> довольны наши клиенты
			</SubTitle>
		</div>
		<Button rounded>
			<span className={"text-base"}>
				Увидеть все
			</span>
		</Button>
	</Container>;
};