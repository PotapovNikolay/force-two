import useSWR from "swr";
import unfetch from "unfetch";

export const fetcher = (url: string) => unfetch(url).then((r) => r.json());

export const useFetch = <T>(url: string) => {
	const { data, error } = useSWR<T>(url, fetcher);

	return {
		data,
		error,
		isLoading: !data && !error,
	};
};