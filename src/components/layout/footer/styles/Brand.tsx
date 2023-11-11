import Image from "next/image";
import Link from "next/link";

export const Brand = () => {

	return <Link href="https://flowbite.com/" className="flex items-center">
		<Image src="https://flowbite.com/docs/images/logo.svg" width={40} height={40} style={{ marginRight: "1rem" }}
		       alt="Flowbite Logo"/>
		<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ForcePC</span>
	</Link>;
};