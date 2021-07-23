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
		font-weight: 500;
	}
	p {
		font-weight: 400;
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
