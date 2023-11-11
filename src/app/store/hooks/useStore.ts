import { useSelector } from "react-redux";

import { RootState } from "@/app/store";

type StoreName = "header";

type StoreKeys<T> = keyof T;

function useStore<T extends RootState, K extends StoreName>(storeName: K, ...keys: StoreKeys<T[K]>[]) {
	const store = useSelector((state: RootState) => state[storeName]);

	return keys.reduce((acc, key) => {
		acc[key] = store[key];
		return acc;
	}, {} as T[K])[keys[0]];
}

export default useStore;