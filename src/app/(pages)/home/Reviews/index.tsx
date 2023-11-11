import { Description } from "pages/home/Reviews/Description";
import { Row } from "pages/home/Reviews/Row";
import { Container } from "pages/home/Reviews/styles";

import prisma from "@/lib/prisma";

async function getReviews() {

	return prisma.review.findMany({ take: 3 });
}

export const Reviews = async () => {

	const reviews = await getReviews();

	return <Container>
		<Description/>
		<Row reviews={reviews}/>
	</Container>;
};