import Image from "next/image";

export const RightColumn = () => {

	return <div
		className={"hidden h-full w-7/12 scale-x-[-1] md:flex flex-col items-center justify-center z-10 translate-x-10"}>
		<Image src={"/images/computers/main-computer.png"} alt={"Компьютер"} sizes="65vw" width={600} height={600}
		       style={{
			       width: "65%",
			       height: "auto",
			       objectPosition: "right"
		       }}/>
	</div>;

};