type TextProps = {
	text: string
}

export const Text: React.FunctionComponent<TextProps> = ({ text }) => {
	return <span
		className="inline-flex items-center px-3 text-sm   border border-r-0  rounded-r-md bg-accent text-white border-gray-600">
	  {text}
  </span>;
};