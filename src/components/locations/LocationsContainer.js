import Description from "./LocationsDescription";
import LocationsMap from "./LocationsMap";
import Image1 from "../../../public/CanadaMap.png";
import Image2 from "../../../public/AustraliaMap.png";
import Image3 from "../../../public/UKMap.png";

import {
	Container,
	SubContainer,
} from "../../../styles/component-styles/locations-styles/LocationsContainer.module";

const LocationsContainer = () => {
	return (
		<Container>
			<SubContainer>
				<div>
					<Description
						title="Canada"
						addressTitle="Designo Central Office"
						addressOne="3886 Wellington Street"
						addressTwo="Toronto, Ontario M9C 3J5"
						phoneNumber="+1 253-863-8967"
						email="contact@designo.co"
					/>
				</div>

				<div>
					<LocationsMap image={Image1} />
				</div>
			</SubContainer>

			<SubContainer>
				<div>
					<LocationsMap image={Image2} />
				</div>

				<div>
					<Description
						title="Australia"
						addressTitle="Designo AU Office"
						addressOne="19 Balonne Street"
						addressTwo="New South Wales 2443"
						phoneNumber="(02) 6720 9092"
						email="contact@designo.au"
					/>
				</div>
			</SubContainer>

			<SubContainer>
				<div>
					<Description
						title="United Kingdom"
						addressTitle="Designo UK Office"
						addressOne="13 Colorado Way"
						addressTwo="Rhyd-y-fro SA8 9GA"
						phoneNumber="078 3115 1400"
						email="contact@designo.uk"
					/>
				</div>

				<div>
					<LocationsMap image={Image3} />
				</div>
			</SubContainer>
		</Container>
	);
};

export default LocationsContainer;
