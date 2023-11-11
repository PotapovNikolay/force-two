import { FunctionComponent, ReactNode } from "react";

type TextProps = {
	children?: ReactNode,
	styles?: string,
	text?: string,
	size?: string,
	color?: string,
	m?: number,
	mt?: number,
	mb?: number,
	mx?: number,
	my?: number,
}

export const Text: FunctionComponent<TextProps> = ({ children, text, styles, color, size, m, mx, my, mt, mb }) => {

	const ms = `m-${m} mt-${mt} mb-${mb} mx-${mx} my-${my}`;

	return <h1 className={`text-white text-${size} text-${color} ${ms} ${styles}`}>
		{children}
		{text}
	</h1>;
};

export default Text;