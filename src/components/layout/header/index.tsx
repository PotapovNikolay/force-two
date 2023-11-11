import { Main } from "components/layout/header/Main";
import { Mobile } from "components/layout/header/Mobile";
import { Brand, Nav } from "components/layout/header/styles";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {

	return <Nav>
		<Brand/>
		<Mobile/>
		<Main/>
	</Nav>;
};

export default Header;