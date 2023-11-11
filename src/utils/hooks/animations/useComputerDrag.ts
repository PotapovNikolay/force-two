import { useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useEffect, useRef } from "react";

export const useComputerDrag = () => {

	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {

		if (!divRef.current) return;
		const half = divRef.current.offsetWidth / 2;
		setSpringProps({ width: half, widthMainImage: half });

	}, [divRef]);

	const [springProps, setSpringProps] = useSpring(() => ({
		from: {
			width: 0,
			x: 0,
			z: 2,
			opacity: 1,
			rounded: "0",
			visibleImages: 0,
			widthMainImage: 0,
			visibleMainImage: 1
		},
		immediate: true,
	}));


	const bind = useDrag(({ down, movement: [mx] }) => {

		if (!divRef.current) return;

		const container = divRef.current.offsetWidth;
		const half = container / 2;
		const sixth = container / 6;

		if (!mx) {
			setSpringProps({ opacity: 1 });
		}

		if (mx < -half) {
			mx = -half;
		} else if (mx > half) {
			mx = half;
		}

		const opacity = mx > sixth ? 0 : 1;
		const visibleImages = springProps.width.to((val) => val > container - 30 ? 1 : 0);
		const visibleMainImage = mx > sixth ? 0 : 1;

		const widthMainImage = mx > sixth ? half - mx : half;
		const width = down ? half - mx : half;
		const x = down ? mx : 0;

		const isLeftSide = mx < -half / 2;
		const isRightSide = mx > half - sixth;
		const isBetween = mx > -half / 2 && mx < half - sixth;

		if (isLeftSide) {
			setSpringProps({
				width: down ? half - mx : container,
				x: down ? mx : -half,
				rounded: "0.75rem",
				visibleImages
			});
		} else {
			setSpringProps({ rounded: "0", visibleImages });
		}

		if (isRightSide) {
			setSpringProps({
				z: 2,
				width: 0,
				x: down ? mx : half,
				widthMainImage: 0,
				visibleMainImage: 0,
			});
		}

		if (isBetween) {
			setSpringProps({ opacity, width, x, widthMainImage, visibleMainImage });
		}

	}, { axis: "x", delay: 0 });

	return { divRef, springProps, bind };
};