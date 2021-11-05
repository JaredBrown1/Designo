import styled from "styled-components";

export const TitleContainer = styled.div`
	background-image: url("/Group 64 Copy.png");
	margin: 0 auto;
	margin-top: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1111px;
	height: 480px;
	color: var(--col-primary-three);

	h1 {
		font-size: 48px;
		font-family: "Jost";
		font-weight: 400;
	}

	p {
		font-size: 16px;
		line-height: 26px;
		font-weight: 300;
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		flex-direction: column-reverse;
		width: 689px;
		border-radius: 20px;
	}
`;

export const TextContainer = styled.div`
	margin-right: 50px;
	padding-right: 50px;

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		text-align: center;
		padding-right: 0px;
		margin-right: 0px;
	}
`;

export const ImgContainer = styled.div`
	background-image: url("/image-about-hero.jpg");
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	width: 476px;
	height: 480px;
	display: flex;
	margin-right: -85px;

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		background-image: url("/image-about-hero-tab.jpg");
		width: 689px;
		height: 320px;
		margin-right: 0px;
		border-radius: 20px;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
		background-repeat: no-repeat;
	}
`;
