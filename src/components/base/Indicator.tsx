type Direction = "horizontal" | "vertical"

type IndicatorProps = {
	direction?: Direction,
	isHover?: boolean
}

export const Indicator: React.FunctionComponent<IndicatorProps> = ({ direction = "horizontal", isHover }) => {

	const line = direction === "horizontal" ? " w-5 md:w-7 h-1 " : " w-1 h-[1rem] ";

	return <div
		className={line + `${isHover && "bg-accent"}` + " bg-[#333333] rounded-full transition group-hover:delay-150 group-hover:bg-accent  group-focus:delay-0 group-focus:bg-[#ff70fd] "}/>;
};