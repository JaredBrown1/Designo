import { HomeBottomContainer } from "../../../../styles/component-styles/home-styles/HomeBottom.module";
import Image from "next/image";

const HomeBottom = () => {
	return (
		<HomeBottomContainer>
			<div>
				<Image
					src="/illustration-passionate.svg"
					alt="passionate"
					width={202}
					height={202}
				/>
				<h1>PASSIONATE</h1>
				<p>
					Each project starts with an in-depth branch research <br /> to ensure
					we only create products that serve a <br /> purpose. We merge art,
					design, and technology <br /> into exciting new solutions.
				</p>
			</div>
			<div>
				<Image
					src="/illustration-resourceful.svg"
					alt="passionate"
					width={202}
					height={202}
				/>
				<h1>RESOURCEFUL</h1>
				<p>
					Everything that we do has a strategic purpose. We <br /> use an agile
					approach in all of our projects and <br /> value customer
					collaboration. It guarantees <br /> superior results that fulfill our
					clients&apos; needs.
				</p>
			</div>
			<div>
				<Image
					src="/illustration-friendly.svg"
					alt="passionate"
					width={202}
					height={202}
				/>
				<h1>FRIENDLY</h1>
				<p>
					We are a group of enthusiastic folks who know how <br /> to put people
					first. Our success depends on our <br /> customers, and we strive to
					give them the best <br /> experience a company can provide.{" "}
				</p>
			</div>
		</HomeBottomContainer>
	);
};

export default HomeBottom;
