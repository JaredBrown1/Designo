import {
	Container,
	SubContainer,
} from "../../../styles/component-styles/locations-styles/LocationsDescription.module";

const Description = (props) => {
	return (
		<Container>
			<div>
				<h1>{props.title}</h1>
			</div>

			<SubContainer>
				<div>
					<h4>{props.addressTitle}</h4>
					<p>{props.addressOne}</p>
					<p>{props.addressTwo}</p>
				</div>

				<div>
					<h4>Contact</h4>
					<p>P: {props.phoneNumber}</p>
					<p>M: {props.email}</p>
				</div>
			</SubContainer>
		</Container>
	);
};

export default Description;
