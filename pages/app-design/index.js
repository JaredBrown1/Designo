import NavBar from "../../src/components/nav-bar/NavBarLight";
import Footer from "../../src/components/footer/Footer";
import FooterHeader from "../../src/components/footer-header/FooterHeader";
import DesignTitle from "../../src/components/design/DesignTitle";
import DesignCard from "../../src/components/design/DesignCard";
import Image1 from "../../public/design-images/image-airfilter.jpg";
import Image2 from "../../public/design-images/image-eyecam.jpg";
import Image3 from "../../public/design-images/image-faceit.jpg";
import Image4 from "../../public/design-images/image-todo.jpg";
import Image5 from "../../public/design-images/image-loopstudios.jpg";
import DesignNextWeb from "../../src/components/design/DesignNextWeb";
import DesignNextGraphic from "../../src/components/design/DesignNextGraphic";

const AppDesign = () => {
	return (
		<div>
			<div style={{ margin: "0 auto", width: "1120px" }}>
				<NavBar />
				<DesignTitle
					title="App Design"
					subtitleOne="Our mobile designs bring intuitive digital solutions"
					subtitleTwo="to your customers right at their fingertips."
				/>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						padding: "10px",
					}}
				>
					<DesignCard
						image={Image1}
						title="AIRFILTER"
						subtitleOne="Solving the problem of poor indoor air"
						subtitleTwo="quality by filtering the air"
					/>
					<DesignCard
						image={Image2}
						title="EYECAM"
						subtitleOne="Product that lets you edit your favorite"
						subtitleTwo="photos and videos at any time"
					/>
					<DesignCard
						image={Image3}
						title="FACEIT"
						subtitleOne="Get to meet your favorite internet"
						subtitleTwo="superstar with the faceit app"
					/>
				</div>

				<div
					style={{
						display: "flex",
						marginBottom: "80px",
					}}
				>
					<DesignCard
						image={Image4}
						title="TODO"
						subtitleOne="A todo app that features cloud sync with"
						subtitleTwo="light and dark mode"
					/>
					<DesignCard
						image={Image5}
						title="LOOPSTUDIOS"
						subtitleOne="A VR experience app made for"
						subtitleTwo="Loopstudios"
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
					<DesignNextGraphic />
					<DesignNextWeb />
				</div>
			</div>

			<FooterHeader />
			<Footer />
		</div>
	);
};

export default AppDesign;
