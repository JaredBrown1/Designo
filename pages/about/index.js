import Footer from "../../src/components/footer/Footer";
import FooterHeader from "../../src/components/footer-header/FooterHeader";
import NavBarLight from "../../src/components/nav-bar/NavBarLight";
import AboutTitle from "../../src/components/about/AboutTitle";

const About = () => {
	return (
		<div>
			<NavBarLight />

			<AboutTitle />

			<FooterHeader />
			<Footer />
		</div>
	);
};

export default About;
