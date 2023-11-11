import { MenuButton } from "components/layout/header/Mobile/MenuButton";
import { SearchButton } from "components/layout/header/Mobile/SearchButton";
import { SearchField } from "components/layout/header/Mobile/SearchField";
import { Container } from "components/layout/header/Mobile/styles/Container";
import { FunctionComponent } from "react";

export const Mobile: FunctionComponent = () => {

	return <Container>
		<SearchButton/>
		<SearchField/>
		<MenuButton/>
	</Container>;
};