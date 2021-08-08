import NavBar from "../../src/components/nav-bar/NavBarLight";
import Footer from "../../src/components/footer/Footer";
import FooterHeader from "../../src/components/footer-header/FooterHeader";
import DesignTitle from "../../src/components/design/DesignTitle";

const GraphicDesign = () => {
	return (
		<div>
			<NavBar />
			<DesignTitle
				title="Graphic Design"
				subtitleOne="We deliver eye-catching branding materials that are"
				subtitleTwo="tailored to
                meet your business objectives."
			/>
			<FooterHeader />
			<Footer />
		</div>
	);
};

export default GraphicDesign;
