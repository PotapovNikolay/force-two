import { SWRConfiguration } from "swr";

declare module "unfetch" {
	export default function fetch(
		input: RequestInfo,
		init?: RequestInit
	): Promise<Response>;
}

declare module "swr" {
	export interface ConfigInterface extends SWRConfiguration {
	}
}