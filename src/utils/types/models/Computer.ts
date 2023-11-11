import { TImage } from "types/models/Image";

export type TComputer = {
	id: number;
	name: string;
	type: string;
	OS: string | null;
	light: string | null;
	guarantee: string | null;
	CPU: string;
	GPU: string;
	RAM: string;
	memory: string;
	power: string;
	motherboard: string;
	cooling: string;
	frame: string;
	count: number;
	price: number;
	images: TImage[]
};