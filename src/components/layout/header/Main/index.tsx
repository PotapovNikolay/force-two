"use client";

import { Search } from "components/layout/header/Main/Search";
import { Container, Links } from "components/layout/header/Main/styles";
import { links } from "constants/Links";
import NextLink from "next/link";
import { FunctionComponent } from "react";

export const Main: FunctionComponent = () => {
	
	return <Container>
		<Search/>
		<Links>
			{links.map((link) => {
				// const isActive = pathname === link.href;
				return (
					<NextLink
						className={"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}
						// className={isActive ? "text-blue" : "text-black"}
						href={link.href}
						key={link.name}
					>
						{link.name}
					</NextLink>
				);
			})}
		</Links>
	</Container>;
};