import { filters } from "constants/text/home/filters";
import { Container, Title } from "pages/home/Computers/Filter/styles";

export const Filter = () => {

	return <Container>
		{filters.map((filter) => {
			return <Title key={filter} text={filter}/>;
		})}
	</Container>;
};