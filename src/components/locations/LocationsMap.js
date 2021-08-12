import Image from "next/image";

import { Container } from "../../../styles/component-styles/locations-styles/LocationsMaps.module";

const LocationsMap = (props) => {
	return (
		<Container>
			<Image src={props.image} width={350} height={326} alt="map" />
		</Container>
	);
};

export default LocationsMap;
