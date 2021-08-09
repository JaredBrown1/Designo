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
`;

export const ImageContainer = styled.div`
	background-image: url("/image-world-class-talent.jpg");
	width: 476px;
	height: 640px;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
`;

export const TextContainer = styled.div`
	width: 635px;
	text-align: left;
	padding-left: 100px;

	h1 {
		color: var(--col-primary-one);
		font-weight: 400;
	}
`;
