import { Computers } from "pages/home/Computers";
import { Feature } from "pages/home/Feature";
import { Main } from "pages/home/Main";
import { Navigation } from "pages/home/Navigation";
import { Newsletter } from "pages/home/Newsletter";
import { Reviews } from "pages/home/Reviews";
import { Container } from "pages/home/styles/Container";

export const Home = () => {

	return <Container>
		<Main/>
		<Navigation/>
		<Computers/>
		<Feature/>
		<Reviews/>
		<Newsletter/>
	</Container>;
};