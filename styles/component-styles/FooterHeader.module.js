import styled from "styled-components";

export const FooterHeaderContainer = styled.div`
	margin: 0 auto;
	background-image: url("/Group 28.png");
	color: var(--col-primary-three);
	max-width: 1111px;
	height: 292px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-bottom: -70px;
	position: relative;
	h1 {
		font-weight: 400;
		font-size: 40px;
		line-height: 40px;
	}
	p {
		font-weight: 400;
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		background-image: url("/tablet/Group28tablet.png");
		max-width: 690px;
		max-height: 350px;
		flex-direction: column;
		text-align: center;
		border-radius: 10px;
	}
`;

export const Button = styled.button`
	border: none;
	width: 152px;
	height: 56px;
	border-radius: 10px;
	cursor: pointer;
	&:hover {
		background-color: var(--col-secondary-one);
		color: var(--col-primary-three);
	}
`;
