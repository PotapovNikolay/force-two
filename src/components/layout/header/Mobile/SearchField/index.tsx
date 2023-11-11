import { Container } from "components/layout/header/Mobile/SearchField/styles/Container";
import { Field } from "components/layout/header/Mobile/SearchField/styles/Field";
import { Icon } from "components/layout/header/Mobile/SearchField/styles/Icon";
import { Loupe } from "components/layout/header/Mobile/SearchField/styles/Loupe";
import { FunctionComponent } from "react";

export const SearchField: FunctionComponent = () => {

	return <Container>
		<Icon>
			<Loupe/>
		</Icon>
		<Field/>
	</Container>;
};