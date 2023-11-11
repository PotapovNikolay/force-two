import { Container, ContainerProps } from "./Container";

const withClasses = <P extends ContainerProps>(
	WrappedComponent: React.FunctionComponent<ContainerProps>
	, className: string) => {
	const WithClasses: React.FC<Omit<P, "className">> = ({
		...props
	}) => {
		const classes = `${className}`;
		return <WrappedComponent {...props as P} className={classes}/>;
	};
	
	return WithClasses;
};

export const WrappedContainer = (className: string) => withClasses(Container, className);

export default WrappedContainer;