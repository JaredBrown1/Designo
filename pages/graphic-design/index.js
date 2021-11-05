import Link from "next/link";
import Image from "next/image";

import NavBar from "../../src/components/nav-bar/NavBarLight";
import Footer from "../../src/components/footer/Footer";
import FooterHeader from "../../src/components/footer-header/FooterHeader";
import DesignTitle from "../../src/components/design/DesignTitle";
import DesignCard from "../../src/components/design/DesignCard";
import Image1 from "../../public/design-images/image-change.jpg";
import Image2 from "../../public/design-images/image-boxed-water.jpg";
import Image3 from "../../public/design-images/image-science.jpg";

import {
	AppDesign,
	WebDesign,
} from "../../styles/component-styles/home-styles/HomeMiddle.module";

import {
	GraphicDesignContainer,
	CardContainer,
	NextPageContainer,
} from "../../styles/component-styles/design-components/GraphicDesign.module";
import { Next } from "react-bootstrap/esm/PageItem";

const GraphicDesign = () => {
	return (
		<GraphicDesignContainer>
			<NavBar />
			<DesignTitle
				title="Graphic Design"
				subtitleOne="We deliver eye-catching branding materials that are"
				subtitleTwo="tailored to
                meet your business objectives."
			/>

			<CardContainer
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
			</CardContainer>

			<NextPageContainer
				style={{
					display: "flex",
					justifyContent: "center",
					paddingRight: "25px",
					paddingBottom: "80px",
				}}
			>
				<Link href="/web-design">
					<a>
						<WebDesign>
							<h1>WEB DESIGN</h1>

							<p>
								VIEW PROJECTS {"            "}
								<Image
									src="/icon-right-arrow.svg"
									alt="arrow"
									width={6}
									height={12}
								/>
							</p>
						</WebDesign>
					</a>
				</Link>

				<Link href="/app-design">
					<a>
						<AppDesign>
							<h1>APP DESIGN</h1>

							<p>
								VIEW PROJECTS {"            "}
								<Image
									src="/icon-right-arrow.svg"
									alt="arrow"
									width={6}
									height={12}
								/>
							</p>
						</AppDesign>
					</a>
				</Link>
			</NextPageContainer>

			<FooterHeader />
			<Footer />
		</GraphicDesignContainer>
	);
};

export default GraphicDesign;
