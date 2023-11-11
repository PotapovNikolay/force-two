import { FunctionComponent, ReactNode } from "react";


export type ColumnsProps = {
	children?: ReactNode,
}

export const Columns: FunctionComponent<ColumnsProps> = ({ children }) => {

	return <div className={"columns-2 gap-16  mt-16 w-9/12"}>
		{children}
	</div>;
};

export default Columns;