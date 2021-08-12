import Image from "next/image";

const LocationsMap = (props) => {
	return (
		<div>
			<Image src={props.image} width={350} height={326} alt="map" />
		</div>
	);
};

export default LocationsMap;
