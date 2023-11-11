import { CenterLine, Container, LeftLine, RightLine } from "pages/home/Main/Lines/styles";
import { FunctionComponent } from "react";

type LinesProps = {
	styles?: string
}

export const Lines: FunctionComponent<LinesProps> = ({ styles }) => {

	return <Container styles={styles}>
		<LeftLine/>
		<CenterLine/>
		<RightLine/>
	</Container>;
};