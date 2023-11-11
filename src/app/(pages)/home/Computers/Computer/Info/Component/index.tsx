import { Indicator } from "components/base/Indicator";
import Text from "components/base/Text";
import { Container, Title } from "pages/home/Computers/Computer/Info/Component/styles";

type ComponentProps = {
	title: string,
	component: string,
}

export const Component: React.FunctionComponent<ComponentProps> = ({ title, component }) => {
	return <Container>
		<Title>
			<Indicator direction={"vertical"}/>
			<Text styles={"mx-2 text-sm text-gray-600"}>
				{title}
			</Text>
		</Title>
		<Text styles={"mx-3 text-lg"}>
			{component}
		</Text>
	</Container>;
};