import { Title } from "components/base/Title";
import { descriptions } from "constants/text/home/descriptions";
import { Computer } from "pages/home/Computers/Computer";
import { Description } from "pages/home/Computers/Description";
import { Filter } from "pages/home/Computers/Filter";
import { Columns, Container } from "pages/home/Computers/styles";

// import { Container } from "pages/home/Computers/styles";
import prisma from "@/lib/prisma";

// const co = [{
// 	name: "MacBook Pro",
// 	type: "Laptop",
// 	OS: "macOS",
// 	CPU: "Intel Core i7",
// 	GPU: "AMD Radeon Pro 5500M",
// 	RAM: "16GB",
// 	memory: "512GB SSD",
// 	power: "61W",
// 	motherboard: "Apple T2 chip",
// 	cooling: "Active cooling",
// 	frame: "Aluminum",
// 	count: 10,
// 	price: 2000,
// 	images: {
// 		create: [{ path: "/images/computers/pc1/ca1s4.png" },
// 			{ path: "/images/computers/pc1/ca1s5.png" },
// 			{ path: "/images/computers/pc1/ca1s6.png" },]
// 	}
// }, {
// 	name: "Dell XPS 15",
// 	type: "Laptop",
// 	OS: "Windows 10",
// 	CPU: "Intel Core i9",
// 	GPU: "NVIDIA GeForce GTX 1650 Ti",
// 	RAM: "32GB",
// 	memory: "1TB SSD",
// 	power: "130W",
// 	motherboard: "Dell",
// 	cooling: "Dual-fan cooling",
// 	frame: "Aluminum",
// 	count: 10,
// 	price: 2500,
// 	images: {
// 		create: [
// 			{ path: "/images/computers/pc2/ares-2-768x768.png" },
// 			{ path: "/images/computers/pc2/ares-4-768x768.png" },
// 			{ path: "/images/computers/pc2/ares-5-768x768.png" },
// 		]
// 	}
// }, {
// 	name: "HP Pavilion Gaming Desktop",
// 	type: "Desktop",
// 	OS: "Windows 10",
// 	CPU: "Intel Core i5",
// 	GPU: "NVIDIA GeForce GTX 1660",
// 	RAM: "8GB",
// 	memory: "512GB SSD",
// 	power: "500W",
// 	motherboard: "HP",
// 	cooling: "Air cooling",
// 	frame: "Plastic",
// 	count: 10,
// 	price: 1000,
// 	images: {
// 		create: [
// 			{ path: "/images/computers/pc3/dsc01353-768x768.png" },
// 			{ path: "/images/computers/pc3/dsc01363-768x768.png" },
// 			{ path: "/images/computers/pc3/dsc01381-768x768.png" },
// 		]
// 	}
// }, {
// 	name: "Lenovo ThinkPad X1 Carbon",
// 	type: "Laptop",
// 	OS: "Windows 10",
// 	CPU: "Intel Core i7",
// 	GPU: "Intel UHD Graphics",
// 	RAM: "16GB",
// 	memory: "256GB SSD",
// 	power: "65W",
// 	motherboard: "Lenovo",
// 	cooling: "Passive cooling",
// 	frame: "Carbon fiber",
// 	count: 10,
// 	price: 1500,
// 	images: {
// 		create: [
// 			{ path: "/images/computers/pc4/ca1s4.png" },
// 			{ path: "/images/computers/pc4/ca1s5.png" },
// 			{ path: "/images/computers/pc4/ca1s6.png" },
// 		]
// 	}
// }, {
// 	name: "ASUS ROG Strix G15",
// 	type: "Laptop",
// 	OS: "Windows 10",
// 	CPU: "Intel Core i7",
// 	GPU: "NVIDIA GeForce RTX 3070",
// 	RAM: "16GB",
// 	memory: "1TB SSD",
// 	power: "240W",
// 	motherboard: "ASUS",
// 	cooling: "Liquid metal cooling",
// 	frame: "Plastic",
// 	count: 10,
// 	price: 3000,
// 	images: {
// 		create: [
// 			{ path: "/images/computers/pc5/s300_1_s.png" },
// 			{ path: "/images/computers/pc5/s300_2_s.png" },
// 			{ path: "/images/computers/pc5/s300_4_s.png" },
// 		]
// 	}
// }];
//
// const images = [
// 	{ path: "/images/computers/pc1/ca1s4.png" },
// 	{ path: "/images/computers/pc1/ca1s4.pngca1s5.png" },
// 	{ path: "/images/computers/pc1/ca1s4.pngca1s6.png" },
// 	{ path: "ca1s4.pngares-1-1-768x768.png" },
// 	{ path: "/images/computers/pc2/ca1s4.pngares-2-768x768.png" },
// 	{ path: "/images/computers/pc2/ca1s4.pngares-4-768x768.png" },
// 	{ path: "/images/computers/pc2/ca1s4.pngares-5-768x768.png" },
// 	{ path: "ares-3-768x768.png" },
// 	{ path: "dsc01353-768x768.png" },
// 	{ path: "dsc01363-768x768.png" },
// 	{ path: "dsc01381-768x768.png" },
// 	{ path: "/images/computers/pc2/ah_t200_1t1.png" },
// 	{ path: "/images/computers/pc2/ah_t200_2t2.png" },
// 	{ path: "/images/computers/pc2/ah_t200_5t.png" },
// 	{ path: "/images/computers/pc5/ca1s4.png" },
// 	{ path: "/images/computers/pc5/ca1s4.pngca1s5.png" },
// 	{ path: "/images/computers/pc5/ca1s4.pngca1s6.png" },
// 	{ path: "s300_1_s.png" },
// 	{ path: "s300_2_s.png" },
// 	{ path: "s300_4_s.png" },
// 	{ path: "h200s_01_1_2.png" },
// 	{ path: "h200s_02_2.png" }, { path: "h200s_06_2.png" },];

async function getComputers() {
	
	//await prisma.computer.create({ data: computers[4] });
	// await prisma.computer.createMany({ data: computers });
	// await prisma.computer.deleteMany();
	// await prisma.image.deleteMany();
	// await prisma.computer.create({
	// 	data: c
	// });
	return prisma.computer.findMany({ include: { images: true } });
}

export const Computers = async () => {
	
	const computersType = "Desktop";
	const computers = await getComputers();
	
	const description = descriptions.find((desc) => desc.type === computersType);
	// const computersWithDescription = computers.unshift(descriptions[0])
	
	return <Container>
		<Title>
			Готовые сборки
		</Title>
		<Filter/>
		<Columns>
			<Description text={description!.description}/>
			{
				computers.map((computer, key) => {
					return <Computer key={computer.id} isBreak={key === 1} computer={computer}/>;
				})
			}
		</Columns>
	</Container>;
};