import { FunctionComponent, ReactNode } from "react";


export type ColumnsProps = {
	children?: ReactNode,
	styles?: string,
	columns?: number,
	gap?: number,
	color?: string,
	m?: number,
	mt?: number,
	mb?: number,
	mx?: number,
	my?: number,

}

export const Columns: FunctionComponent<ColumnsProps> = ({
	                                                         children,
	                                                         styles,
	                                                         columns = 2,
	                                                         gap,
	                                                         m,
	                                                         mt,
	                                                         mb,
	                                                         mx,
	                                                         my,
	                                                         color = "white"
                                                         }) => {


	return <div
		className={`columns-${columns} gap-${gap} ${styles} text-${color} m-${m} mt-${mt} mb-${mb} mx-${mx} my-${my}`}>
		{children}
	</div>;
};

export default Columns;