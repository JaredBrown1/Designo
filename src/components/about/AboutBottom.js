import {
	AboutBottomContainer,
	TextContainer,
	ImageContainer,
} from "../../../styles/component-styles/about-styles/AboutBottom.module";

const AboutBottom = () => {
	return (
		<AboutBottomContainer>
			<TextContainer>
				<h1>The real deal</h1>
				<p>
					As strategic partners in our clients’ businesses, we are ready to
					<br /> take on any challenge as our own. Solving real problems require
					<br /> empathy and collaboration, and we strive to bring a fresh
					<br /> perspective to every opportunity. We make design and
					<br /> technology more accessible and give you tools to measure
					<br /> success.
				</p>
				<p>
					We are visual storytellers in appealing and captivating ways. By
					<br /> combining business and marketing strategies, we inspire
					<br /> audiences to take action and drive real results.
				</p>
			</TextContainer>

			<ImageContainer></ImageContainer>
		</AboutBottomContainer>
	);
};

export default AboutBottom;
