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

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		margin: 0px;
		width: 689px;
		height: 310px;
		display: flex;
		align-items: center;
		text-align: center;
		margin-bottom: 20px;

		h1 {
			padding-left: 50px;
		}

		p {
			padding-left: 50px;
		}
	}
`;
