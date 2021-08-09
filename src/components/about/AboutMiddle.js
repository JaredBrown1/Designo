import {
	AboutMiddleContainer,
	MiddleCities,
} from "../../../styles/component-styles/about-styles/AboutMiddle.module";
import Image from "next/image";

const AboutMiddle = () => {
	return (
		<AboutMiddleContainer>
			<MiddleCities>
				<Image src="/Group 10a.svg" width={202} height={202} alt="city" />
				<h1>CANADA</h1>
				<button>SEE LOCATION</button>
			</MiddleCities>
			<MiddleCities>
				<Image src="/Group 15.svg" width={202} height={202} alt="city" />
				<h1>AUSTRALIA</h1>
				<button>SEE LOCATION</button>
			</MiddleCities>
			<MiddleCities>
				<Image src="/Group 17.svg" width={202} height={202} alt="city" />
				<h1>UNITED KINGDOM</h1>
				<button>SEE LOCATION</button>
			</MiddleCities>
		</AboutMiddleContainer>
	);
};

export default AboutMiddle;
