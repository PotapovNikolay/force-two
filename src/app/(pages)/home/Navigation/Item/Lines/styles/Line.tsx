import { FunctionComponent } from "react";

type LineProps = {
	reverse?: boolean
}
export const Line: FunctionComponent<LineProps> = ({ reverse }) => {

	return <svg
		className={"w-16 fill-main-900 stroke-1 bg-[#333333] group-hover:animate-navigation-lines group-focus:animate-none group-focus:bg-[#ff70fd] " + `${reverse && " scale-x-[-1]"}`}
		id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 304">
		<g>
			<path
				d="M0,0H292V304H0ZM284.1494,27.85313c.11287-7.18714-2.93716-11.542-8.3447-11.68947-5.165-.14085-8.18748,3.793-8.76429,10.57688-.84625,9.95283-1.29917,20.01515-3.16331,29.79358Q236.44435,200.43286,100.69,255.746a214.813,214.813,0,0,1-71.88122,15.58262c-5.31508.2313-9.0454,4.2701-8.6,9.00949.46992,5,5.09418,8.32753,10.45169,7.50441,1.47428-.22651,2.93143-.62193,4.41233-.73938,34.07-2.70207,66.782-10.9403,97.11231-26.65613C226.52685,211.56335,275.81237,132.97722,284.1494,27.85313Z"/>
		</g>
	</svg>;
};