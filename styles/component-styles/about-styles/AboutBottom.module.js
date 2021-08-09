import styled from "styled-components";

export const AboutBottomContainer = styled.div`
	background-image: url("/Group 6a.png");
	margin: 0 auto;
	margin-top: 150px;
	margin-bottom: 150px;
	width: 1111px;
	height: 640px;
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		color: var(--col-primary-one);
		font-weight: 400;
	}
`;

export const TextContainer = styled.div`
	padding-right: 100px;
`;

export const ImageContainer = styled.div`
	background-image: url("/image-real-deal.jpg");
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	padding-left: 100px;
	width: 476px;
	height: 640px;
	margin-right: -100px;
`;
