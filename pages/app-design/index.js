import Link from "next/link";
import Image from "next/image";

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

import {
	WebDesign,
	GraphicDesign,
} from "../../styles/component-styles/home-styles/HomeMiddle.module";

import {
	AppDesignContainer,
	CardContainer,
	NextPageContainer,
} from "../../styles/component-styles/design-components/AppDesign.module";

const AppDesign = () => {
	return (
		<div>
			<AppDesignContainer>
				<NavBar />
				<DesignTitle
					title="App Design"
					subtitleOne="Our mobile designs bring intuitive digital solutions"
					subtitleTwo="to your customers right at their fingertips."
				/>

				<CardContainer>
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
				</CardContainer>

				<CardContainer>
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
				</CardContainer>

				<NextPageContainer>
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
				</NextPageContainer>
			</AppDesignContainer>

			<FooterHeader />
			<Footer />
		</div>
	);
};

export default AppDesign;
