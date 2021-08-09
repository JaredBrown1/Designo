import {
	AboutTopContainer,
	ImageContainer,
	TextContainer,
} from "../../../styles/component-styles/about-styles/AboutTop.module";

const AboutTop = () => {
	return (
		<AboutTopContainer>
			<ImageContainer></ImageContainer>
			<TextContainer>
				<h1>World-class talent</h1>
				<p>
					We are a crew of strategists, problem-solvers, and technologists.
					<br /> Every design is thoughtfully crafted from concept to launch,
					<br /> ensuring success in its given market. We are constantly
					updating
					<br /> our skills in a myriad of platforms.
				</p>
				<p>
					Our team is multi-disciplinary and we are not merely interested in
					<br /> form — content and meaning are just as important. We give great
					<br /> importance to craftsmanship, service, and prompt delivery.
					<br /> Clients have always been impressed with our high-quality
					<br /> outcomes that encapsulates their brand’s story and mission.
				</p>
			</TextContainer>
		</AboutTopContainer>
	);
};

export default AboutTop;
