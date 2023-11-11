"use client";
import { Component } from "pages/home/Computers/Computer/Info/Component";
import { Container } from "pages/home/Computers/Computer/Info/styles";
import { FunctionComponent } from "react";

type InfoProps = {
	infos: Array<{ title: string, component: string }>
}

export const Info: FunctionComponent<InfoProps> = ({ infos }) => {

	return <Container>
		{infos.map(({ title, component }, key) => {
			return <Component key={key} title={title} component={component}/>;
		})}
	</Container>;

};