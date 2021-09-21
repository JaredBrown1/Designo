import styled from "styled-components";

export const TitleContainer = styled.div`
	margin: 0 auto;
	margin-top: 50px;
	margin-bottom: 80px;
	border-radius: 10px;
	background-image: url("/Group 28.png");
	text-align: center;
	color: var(--col-primary-three);
	width: 1111px;
	height: 252px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h1 {
		font-size: 48px;
		font-family: "Jost";
		font-weight: 400;
		line-height: 30px;
	}

	p {
		line-height: 0px;
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		width: 689px;
		height: 252px;
	}
`;
