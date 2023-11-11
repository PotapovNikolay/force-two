import { forwardRef, FunctionComponent, LegacyRef, ReactNode } from "react";

type WrapperContainerProps = {
	children?: ReactNode,
	ref: LegacyRef<HTMLDivElement>
}

const Wrapper = (classes?: string,) => {
	const Container: FunctionComponent<Pick<WrapperContainerProps, "children"> & {
		forwardedRef: React.Ref<HTMLDivElement>
	}> = ({
		children, forwardedRef
	}) => {
		
		return <div ref={forwardedRef} className={`${classes}`}>
			{children}
		</div>;
	};
	
	const WrappedContainer = forwardRef<HTMLDivElement, Pick<WrapperContainerProps, "children">>(
		(props, ref) => <Container {...props} forwardedRef={ref}/>
	);
	WrappedContainer.displayName = ("WrappedContainer");
	
	return WrappedContainer;
};

export default Wrapper;