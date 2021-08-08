import NavBar from "../../src/components/nav-bar/NavBarLight";
import Footer from "../../src/components/footer/Footer";
import FooterHeader from "../../src/components/footer-header/FooterHeader";
import DesignTitle from "../../src/components/design/DesignTitle";
import DesignCard from "../../src/components/design/DesignCard";
import Image1 from "../../public/design-images/image-change.jpg";
import Image2 from "../../public/design-images/image-boxed-water.jpg";
import Image3 from "../../public/design-images/image-science.jpg";

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

			<div
				style={{ display: "flex", justifyContent: "center", padding: "10px" }}
			>
				<DesignCard
					image={Image1}
					title="TIM BROWN"
					subtitleOne="A book cover designed for Tim Brown's"
					subtitleTwo="new release, 'Change'"
				/>
				<DesignCard
					image={Image2}
					title="TIM BROWN"
					subtitleOne="A book cover designed for Tim Brown's"
					subtitleTwo="new release, 'Change'"
				/>
				<DesignCard
					image={Image3}
					title="TIM BROWN"
					subtitleOne="A book cover designed for Tim Brown's"
					subtitleTwo="new release, 'Change'"
				/>
			</div>

			<FooterHeader />
			<Footer />
		</div>
	);
};

export default GraphicDesign;
