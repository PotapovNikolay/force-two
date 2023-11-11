type DescriptionProps = {
	text: string
}

export const Description: React.FunctionComponent<DescriptionProps> = ({ text }) => {
	return <h4 className={"text-xl"}>
		{text}
	</h4>;
};