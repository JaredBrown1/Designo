import {
	HomeMiddleContainer,
	WebDesign,
	AppDesign,
	GraphicDesign,
} from "../../../../styles/component-styles/home-styles/HomeMiddle.module";
import Image from "next/image";
import Link from "next/link";

const HomeMiddle = () => {
	return (
		<HomeMiddleContainer>
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

			<div>
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
			</div>
		</HomeMiddleContainer>
	);
};

export default HomeMiddle;
