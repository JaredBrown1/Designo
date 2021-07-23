import { HomeTopContainer } from "../../../../styles/component-styles/home-styles/HomeTop.module";
import { Button } from "../../../../styles/component-styles/FooterHeader.module";
import Link from "next/link";

const HomeTop = () => {
	return (
		<HomeTopContainer>
			<h1>
				Award-winning custom <br /> designs and digital <br /> branding
				solutions
			</h1>

			<p>
				With over 10 years in the industry, we are experienced in <br />{" "}
				creating full responsive websites, app design, and engaging <br /> brand
				experiences. Find out more about our services.
			</p>

			<Link href="/about">
				<a>
					<Button>LEARN MORE</Button>
				</a>
			</Link>
		</HomeTopContainer>
	);
};

export default HomeTop;
