import Image from "next/image";
import Link from "next/link";

import NavBar from "../../src/components/nav-bar/NavBarLight";
import Footer from "../../src/components/footer/Footer";
import FooterHeader from "../../src/components/footer-header/FooterHeader";
import DesignTitle from "../../src/components/design/DesignTitle";
import DesignCard from "../../src/components/design/DesignCard";
import Image1 from "../../public/design-images/image-express.jpg";
import Image2 from "../../public/design-images/image-transfer.jpg";
import Image3 from "../../public/design-images/image-photon.jpg";
import Image4 from "../../public/design-images/image-builder.jpg";
import Image5 from "../../public/design-images/image-blogr.jpg";
import Image6 from "../../public/design-images/image-camp.jpg";

import {
	AppDesign,
	GraphicDesign,
} from "../../styles/component-styles/home-styles/HomeMiddle.module";

import {
	WebDesignContainer,
	CardContainer,
	NextPageContainer,
} from "../../styles/component-styles/design-components/WebDesign.module";

const WebDesign = () => {
	return (
		<div>
			<WebDesignContainer>
				<NavBar />
				<DesignTitle
					title="Web Design"
					subtitleOne="We build websites that serve as powerful marketing tools"
					subtitleTwo="and bring memorable brand experiences."
				/>

				<CardContainer>
					<DesignCard
						image={Image1}
						title="EXPRESS"
						subtitleOne="A multi-carrier shipping website for"
						subtitleTwo="ecommerce businesses"
					/>
					<DesignCard
						image={Image2}
						title="TRANSFER"
						subtitleOne="Site for low-cost money transfers and"
						subtitleTwo="sending money withing seconds"
					/>
					<DesignCard
						image={Image3}
						title="PHOTON"
						subtitleOne="A state-of-the-art music player with"
						subtitleTwo="high-resolution audio and DSP effects"
					/>
				</CardContainer>

				<CardContainer>
					<DesignCard
						image={Image4}
						title="BUILDER"
						subtitleOne="Connects users with local contractors"
						subtitleTwo="based on their location"
					/>
					<DesignCard
						image={Image5}
						title="BLOGR"
						subtitleOne="Blogr is a platform for creating an online"
						subtitleTwo="blog or publication"
					/>
					<DesignCard
						image={Image6}
						title="CAMP"
						subtitleOne="Get expert training in coding, data,"
						subtitleTwo="design, and digital marketing"
					/>
				</CardContainer>

				<NextPageContainer>
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

					<Link href="/graphic-design">
						<a>
							<GraphicDesign>
								<h1>GRAPHIC DESIGN</h1>

								<p>
									VIEW PROJECTS {"            "}
									<Image
										src="/icon-right-arrow.svg"
										alt="arrow"
										width={6}
										height={12}
									/>
								</p>
							</GraphicDesign>
						</a>
					</Link>
				</NextPageContainer>
			</WebDesignContainer>

			<FooterHeader />
			<Footer />
		</div>
	);
};

export default WebDesign;
