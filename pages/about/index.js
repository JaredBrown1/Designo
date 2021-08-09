import Footer from "../../src/components/footer/Footer";
import FooterHeader from "../../src/components/footer-header/FooterHeader";
import NavBarLight from "../../src/components/nav-bar/NavBarLight";
import AboutTitle from "../../src/components/about/AboutTitle";
import AboutTop from "../../src/components/about/AboutTop";

const About = () => {
	return (
		<div>
			<NavBarLight />

			<AboutTitle />

			<AboutTop />

			<FooterHeader />
			<Footer />
		</div>
	);
};

export default About;
