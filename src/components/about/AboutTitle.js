import {
	TitleContainer,
	TextContainer,
	ImgContainer,
} from "../../../styles/component-styles/about-styles/AboutTitle.module";

const AboutTitle = () => {
	return (
		<TitleContainer>
			<TextContainer>
				<h1>About Us</h1>
				<p>
					Founded in 2010, we are a creative agency that produces lasting <br />{" "}
					results for our clients. We’ve partnered with many startups,
					<br /> corporations, and nonprofits alike to craft designs that make
					real
					<br /> impact. We’re always looking forward to creating brands,
					products,
					<br /> and digital experiences that connect with our clients’
					audiences.
				</p>
			</TextContainer>
			<ImgContainer></ImgContainer>
		</TitleContainer>
	);
};

export default AboutTitle;
