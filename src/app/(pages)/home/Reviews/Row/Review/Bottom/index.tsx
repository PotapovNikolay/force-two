import UserInfo from "components/base/Text";
import { range } from "lodash";
import { Container, Star,Stars } from "pages/home/Reviews/Row/Review/Bottom/styles";
import { FunctionComponent } from "react";

type BottomProps = {
	type: string,
	rate: number
}

export const Bottom: FunctionComponent<BottomProps> = ({ type, rate }) => {
	const stars = range(5);
	
	return <Container>
		<UserInfo size={"xs"} color={"accent"} styles={" break-keep "}>
			{type} компьютеры
		</UserInfo>
		<Stars>
			{
				stars.map((star) => {
					return <Star key={star} isFill={rate >= star + 1}/>;
				})
			}
		</Stars>
	</Container>;
};