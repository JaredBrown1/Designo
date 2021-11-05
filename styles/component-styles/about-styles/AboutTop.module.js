import styled from "styled-components";

export const AboutTopContainer = styled.div`
	background-image: url("/Group 6.png");
	margin: 0 auto;
	margin-top: 150px;
	width: 1111px;
	height: 640px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		width: 689px;
		flex-direction: column;
		border-radius: 20px;
	}
`;

export const ImageContainer = styled.div`
	background-image: url("/image-world-class-talent.jpg");
	width: 476px;
	height: 640px;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		background-image: url("/image-world-class-talent-tab.jpg");
		width: 689px;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 0px;
	}
`;

export const TextContainer = styled.div`
	width: 635px;
	text-align: left;
	padding-left: 100px;

	h1 {
		color: var(--col-primary-one);
		font-weight: 400;
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		text-align: center;
		padding-left: 0px;
	}
`;
