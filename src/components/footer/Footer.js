import NavBar from "../nav-bar/NavBarDark";
import {
	FooterContainer,
	NavContainer,
	FooterInnerContainer,
	StyledLogo,
	StyledLogos,
} from "../../../styles/component-styles/Footer.module";
import Image from "next/image";

const Footer = () => {
	return (
		<FooterContainer>
			<NavContainer>
				<NavBar />
			</NavContainer>

			<FooterInnerContainer>
				<div>
					<p>
						Designo Central Office <br />
						3886 Wellington Street <br />
						Toronto, Ontario M9C 3J5
					</p>
				</div>

				<div>
					<p>
						Contact Us (Central Office) <br /> P: +1 253-863-8967 <br /> M:
						contact@designo.com
					</p>
				</div>

				<StyledLogos>
					<StyledLogo>
						<Image
							src="/icon-facebook.svg"
							alt="socialmedia"
							width={24}
							height={24}
						/>
					</StyledLogo>
					<StyledLogo>
						<Image
							src="/icon-youtube.svg"
							alt="socialmedia"
							width={24}
							height={24}
						/>
					</StyledLogo>
					<StyledLogo>
						<Image
							src="/icon-twitter.svg"
							alt="socialmedia"
							width={24}
							height={24}
						/>
					</StyledLogo>
					<StyledLogo>
						<Image
							src="/icon-pinterest.svg"
							alt="socialmedia"
							width={24}
							height={24}
						/>
					</StyledLogo>
					<StyledLogo>
						<Image
							src="/icon-instagram.svg"
							alt="socialmedia"
							width={24}
							height={24}
						/>
					</StyledLogo>
				</StyledLogos>
			</FooterInnerContainer>
		</FooterContainer>
	);
};

export default Footer;
