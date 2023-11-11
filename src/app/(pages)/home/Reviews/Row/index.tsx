"use client";

import { useHover } from "hooks/useHover";
import { Review } from "pages/home/Reviews/Row/Review";
import { useEffect, useRef, useState } from "react";
import { TReview } from "types/models/Review";

type RowProps = {
	reviews: TReview[]
}
export const Row: React.FunctionComponent<RowProps> = ({ reviews }) => {
	
	const [hoveredReview, setHoveredReview] = useState(reviews[0].id);
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);
	
	useEffect(() => {
		if (isHover) return;
		
		setHoveredReview(() => reviews[0].id);
	}, [isHover]);
	
	return <div ref={hoverRef} className={"flex flex-row "}>
		{
			reviews.map((review, key) => {
				return <Review hoveredReview={hoveredReview} setHoveredReview={setHoveredReview}
				               key={key} review={review}/>;
			})
		}
	</div>;
};