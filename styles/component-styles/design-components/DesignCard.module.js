import styled from "styled-components";

export const Cards = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CardContainer = styled.div`
	width: 350px;
	height: 478px;
	border-radius: 10px;
	text-align: center;
	background-color: #f5cfc4;
	margin: 15px;

	h1 {
		color: var(--col-primary-one);
		font-size: 20px;
		font-weight: 400;
		letter-spacing: 5px;
	}

	p {
		line-height: 26px;
		font-size: 16px;
	}

	&:hover {
		color: var(--col-primary-three);
		cursor: pointer;
		background-color: var(--col-primary-one);

		h1 {
			color: var(--col-primary-three);
		}
	}
`;
