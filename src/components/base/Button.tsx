import { DIRECTION } from "enums/Direction";
import Image from "next/image";
import { FunctionComponent, ReactNode } from "react";
import { Palette } from "types/theme/Palette";


type ButtonProps = {
	action?: () => void,
	text?: string,
	icon?: string,
	direction?: DIRECTION
	children?: ReactNode,
	animate?: string,
	palette?: Palette,
	rounded?: boolean
}

export const Button: FunctionComponent<ButtonProps> = ({
	                                                       action,
	                                                       text,
	                                                       icon,
	                                                       direction = "left",
	                                                       children,
	                                                       animate,
	                                                       palette = Palette.PRIMARY,
	                                                       rounded = false
                                                       }) => {


	const colors = {
		[Palette.PRIMARY]: "bg-accent  hover:bg-green-500 focus:bg-green-600",
		[Palette.DARK]: "bg-main-900 hover:bg-zinc-800 focus:bg-zinc-900",
		[Palette.GRAY]: "bg-zinc-700 hover:bg-zinc-600 focus:bg-zinc-800",
	};

	return <button onClick={action} type="button"
	               className={`${colors[palette]} animate-${animate} text-white text-lg tracking-wide font-medium ${rounded ? "rounded-full" : "rounded-lg"} px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 transition-all duration-200`}>
		{icon && direction === DIRECTION.LEFT && <Image src={icon} alt={`${icon}`} width={25} height={25}/>}
		<span className={"mx-1 text-sm"}>{text}</span>
		{children}
		{icon && direction === DIRECTION.RIGHT && <Image src={icon} alt={`${icon}`} width={25} height={25}/>}
	</button>;
};