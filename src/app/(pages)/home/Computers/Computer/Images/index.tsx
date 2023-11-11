import Image from "next/image";
import { Box, Container } from "pages/home/Computers/Computer/Images/styles";
import { FunctionComponent } from "react";
import { TComputer } from "types/models/Computer";

type ImagesProps = {
	computer: TComputer
}


export const Images: FunctionComponent<ImagesProps> = ({ computer }) => {

	return <Container>
		{computer.images.map((image, key) => {
			return <Box key={key}>
				<Image src={image.path} alt={"das"} fill quality={100}/>
			</Box>;
		})
		}
	</Container>;
};