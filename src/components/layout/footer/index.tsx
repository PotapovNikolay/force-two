import { Brand, Container, Hr, Links, Row } from "components/layout/footer/styles";
import { Subscribe } from "components/layout/footer/Subscribe";
import { links } from "constants/Links";
import NextLink from "next/link";

export const Footer = () => {

	return <Container>
		<Row>
			<Brand/>
			<Links>
				{links.map((link) => {
					return (
						<NextLink
							className={"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent md:p-0 md:dark:hover:text-accent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}
							href={link.href}
							key={link.name}
						>
							{link.name}
						</NextLink>
					);
				})}
			</Links>
			<Subscribe/>
		</Row>
		<Hr/>
		<Row>
			<div className={"text-white"}>
				Все права защищены
			</div>
			<div>
				
			</div>
		</Row>
	</Container>;
};