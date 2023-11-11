import { Bages } from "pages/home/Main/Bages";
import { Lines } from "pages/home/Main/Lines";
import { Container, LeftColumn, RightColumn, Text, Title } from "pages/home/Main/styles";
import { FunctionComponent } from "react";

const mirrorLines = "translate-y-9 h-4 opacity-25 blur-sm";

export const Main: FunctionComponent = () => {

	return <Container>
		<Lines/>
		<Lines styles={mirrorLines}/>
		<LeftColumn>
			<Title/>
			<Text/>
			<Bages/>
		</LeftColumn>
		<RightColumn/>
	</Container>;
};