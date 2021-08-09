import Footer from "../../src/components/footer/Footer";
import FooterHeader from "../../src/components/footer-header/FooterHeader";
import NavBarLight from "../../src/components/nav-bar/NavBarLight";
import AboutTitle from "../../src/components/about/AboutTitle";
import AboutTop from "../../src/components/about/AboutTop";
import AboutMiddle from "../../src/components/about/AboutMiddle";
import AboutBottom from "../../src/components/about/AboutBottom";

const About = () => {
	return (
		<div>
			<NavBarLight />

			<AboutTitle />

			<AboutTop />

			<AboutMiddle />

			<AboutBottom />

			<FooterHeader />
			<Footer />
		</div>
	);
};

export default About;
