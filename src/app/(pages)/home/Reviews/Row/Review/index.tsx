"use client";

import { Indicator } from "components/base/Indicator";
import UserInfo from "components/base/Text";
import { useHover } from "hooks/useHover";
import { Bottom } from "pages/home/Reviews/Row/Review/Bottom";
import { Box, Container, Text } from "pages/home/Reviews/Row/Review/styles";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { TReview } from "types/models/Review";

type ReviewProps = {
	review: TReview,
	setHoveredReview: Dispatch<SetStateAction<number>>
	hoveredReview: number
}

export const Review: React.FunctionComponent<ReviewProps> = ({
	review,
	setHoveredReview,
	hoveredReview
}) => {
	const { text, type, name, sername, rate, id } = review;
	
	const hoverRef = useRef<HTMLDivElement>(null);
	const isHover = useHover(hoverRef);
	
	useEffect(() => {
		if (!isHover) return;
		
		setHoveredReview(() => id);
	}, [isHover]);
	
	const isThisReviewHovered = hoveredReview === id;
	
	return <Container ref={hoverRef}>
		<Indicator isHover={isThisReviewHovered}/>
		<Box condition={isThisReviewHovered}>
			<Text condition={isThisReviewHovered}>
				{text}
			</Text>
			{isThisReviewHovered && <UserInfo size={"sm"} mt={2} text={`${name} ${sername}`} styles={"px-4 pt-2"}/>}
			{isThisReviewHovered && <Bottom type={type} rate={rate}/>}
		</Box>
	</Container>;
};