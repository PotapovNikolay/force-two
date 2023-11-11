import Image from "next/image";

export const CenterLine = () => {

	return <div className={"absolute start-1/2 bottom-44 w-64 -translate-x-20"}>
		<Image src={"/images/lines/main/center-line.svg"} alt={"Левая линия"} width={100} height={100} style={{
			width: "100%",
			height: "auto",
			position: "absolute",
			bottom: 0
		}}/>
		<Image src={"/images/lines/main/center-line-white.svg"} alt={"Левая линия"} width={100} height={100} style={{
			width: "100%",
			height: "auto",
			position: "absolute",
			bottom: 5
		}}/>
		<Image src={"/images/lines/main/center-line.svg"} alt={"Левая линия"} width={100} height={100} style={{
			width: "100%",
			height: "auto",
			position: "absolute",
			bottom: 8,
			filter: "blur(10px)"
		}}/>
		<Image src={"/images/lines/main/center-line.svg"} alt={"Левая линия"} width={100} height={100} style={{
			width: "100%",
			height: "auto",
			position: "absolute",
			bottom: 8
		}}/>
	</div>;
};