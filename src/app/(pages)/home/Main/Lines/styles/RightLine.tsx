import Image from "next/image";

export const RightLine = () => {

	return <div className={"absolute right-0 bottom-40 w-64 translate-x-10"}>
		<Image src={"/images/lines/main/right-line.svg"} alt={"Левая линия"} width={100} height={100} style={{
			width: "100%",
			height: "auto",
			position: "absolute",
			bottom: 0
		}}/>
		<Image src={"/images/lines/main/right-line-white.svg"} alt={"Левая линия"} width={100} height={100} style={{
			width: "100%",
			height: "auto",
			position: "absolute",
			bottom: 5
		}}/>
		<Image src={"/images/lines/main/right-line.svg"} alt={"Левая линия"} width={100} height={100} style={{
			width: "100%",
			height: "auto",
			position: "absolute",
			bottom: 8,
			filter: "blur(10px)"
		}}/>
		<Image src={"/images/lines/main/right-line.svg"} alt={"Левая линия"} width={100} height={100} style={{
			width: "100%",
			height: "auto",
			position: "absolute",
			bottom: 8
		}}/>
	</div>;
};