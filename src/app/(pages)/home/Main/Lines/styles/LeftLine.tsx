import Image from "next/image";

export const LeftLine = () => {

	return <div className={"absolute left-0 bottom-[10.5rem] w-64 -translate-x-10"}>
		<Image src={"/images/lines/main/left-line.svg"} alt={"Левая линия"} width={100} height={100} style={{
			width: "100%",
			height: "auto",
			position: "absolute",
			bottom: 0
		}}/>
		<Image src={"/images/lines/main/left-line-white.svg"} alt={"Левая линия"} width={100} height={50} style={{
			width: "100%",
			height: "auto",
			position: "absolute",
			bottom: 5
		}}/>
		<Image src={"/images/lines/main/left-line.svg"} alt={"Левая линия"} width={100} height={100} style={{
			width: "100%",
			height: "auto",
			position: "absolute",
			bottom: 8,
			filter: "blur(10px)"
		}}/>
		<Image src={"/images/lines/main/left-line.svg"} alt={"Левая линия"} width={100} height={100} style={{
			width: "100%",
			height: "auto",
			position: "absolute",
			bottom: 8
		}}/>
	</div>;
};