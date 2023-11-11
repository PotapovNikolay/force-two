"use client";

import { animated } from "@react-spring/web";
import { useComputerDrag } from "hooks/animations/useComputerDrag";
import Image from "next/image";
import { Buttons } from "pages/home/Computers/Computer/Buttons";
import { Images } from "pages/home/Computers/Computer/Images";
import { Info } from "pages/home/Computers/Computer/Info";
import { Container, RightColInfo, Slider, Title } from "pages/home/Computers/Computer/styles";
import { TComputer } from "types/models/Computer";

type ComputerProps = {
	computer: TComputer
	isBreak?: boolean
}

export const Computer: React.FunctionComponent<ComputerProps> = ({ computer, isBreak = false }) => {

	const { divRef, springProps, bind } = useComputerDrag();

	const infos = [
		{ title: "Процессор", component: computer.CPU },
		{ title: "Оперативная память", component: computer.RAM },
		{ title: "Видеокарта", component: computer.GPU },
		{ title: "Накопитель", component: computer.memory },
		// { title: "Блок питания", component: computer.power },
	];

	const infosExpensive = [
		{ title: "Охлаждение", component: computer.cooling },
		{ title: "Материнская плата", component: computer.motherboard },
		// { title: "Операционная система", component: computer.OS },
	];

	return <div ref={divRef}>

		<Container isBreak={isBreak}>
			<Info infos={infos}/>
			<animated.div style={{ opacity: springProps.visibleImages }}
			              className={"absolute p-6 left-0 top-0 bottom-0 w-1/2 z-10 flex flex-row justify-around items-center"}>
				<Title>
					{computer.name}
				</Title>
				<Images computer={computer}/>
			</animated.div>
			<animated.div {...bind()} style={{ x: springProps.x }} className={"z-20"}>
				<Slider/>
			</animated.div>
			<RightColInfo>
				<Info infos={infosExpensive}/>
				<animated.div style={{ width: springProps.widthMainImage, opacity: springProps.visibleMainImage }}
				              className={"absolute top-0 bottom-10 right-0 z-10 flex flex-row justify-center items-center"}>
					<Image src={computer.images[0].path} alt={"das"} width={250} height={250} quality={100}/>
				</animated.div>
				<Buttons/>
			</RightColInfo>
			<animated.div
				style={{
					width: springProps.width,
					zIndex: springProps.z,
					opacity: springProps.opacity,
					borderTopLeftRadius: springProps.rounded,
					borderBottomLeftRadius: springProps.rounded
				}}
				className={"absolute top-0 bottom-0 right-0 bg-gray-500 rounded-r-xl flex flex-row items-center justify-end"}>
			</animated.div>
		</Container>
	</div>;
};