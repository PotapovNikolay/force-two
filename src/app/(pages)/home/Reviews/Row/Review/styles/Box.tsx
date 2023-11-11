import TransitionContainer from "components/base/TransitionContainer";

export const Box = TransitionContainer({
	before: "translate-y-8  z-10 bg-main pb-2",
	after: "w-72 border border-accent rounded-xl overflow-hidden translate-y-2",
	common: "flex-col"
});