import NavBar from "../../src/components/nav-bar/NavBarLight";
import Footer from "../../src/components/footer/Footer";
import FooterHeader from "../../src/components/footer-header/FooterHeader";
import DesignTitle from "../../src/components/design/DesignTitle";
import DesignCard from "../../src/components/design/DesignCard";
import Image1 from "../../public/design-images/image-change.jpg";
import Image2 from "../../public/design-images/image-boxed-water.jpg";
import Image3 from "../../public/design-images/image-science.jpg";
import DesignNextApp from "../../src/components/design/DesignNextApp";
import DesignNextWeb from "../../src/components/design/DesignNextWeb";

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
				style={{
					display: "flex",
					justifyContent: "center",
					padding: "10px",
					marginBottom: "80px",
				}}
			>
				<DesignCard
					image={Image1}
					title="TIM BROWN"
					subtitleOne="A book cover designed for Tim Brown's"
					subtitleTwo="new release, 'Change'"
				/>
				<DesignCard
					image={Image2}
					title="BOXED WATER"
					subtitleOne="A simple packaging concept made for"
					subtitleTwo="Boxed Water"
				/>
				<DesignCard
					image={Image3}
					title="SCIENCE!"
					subtitleOne="A poster made in collaboration with the"
					subtitleTwo="Federal Art Project"
				/>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					paddingRight: "25px",
					paddingBottom: "80px",
				}}
			>
				<DesignNextWeb />
				<DesignNextApp />
			</div>

			<FooterHeader />
			<Footer />
		</div>
	);
};

export default GraphicDesign;
