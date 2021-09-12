import styled from "styled-components";

export const HomeBottomContainer = styled.div`
	margin: 0 auto;
	max-width: 1111px;
	height: 412px;
	margin-bottom: 120px;
	display: flex;
	color: var(--col-primary-two);
	justify-content: space-around;
	text-align: center;
	h1 {
		font-size: 20px;
		font-weight: 500;
		letter-spacing: 5px;
	}
	p {
		font-size: 16px;
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		flex-direction: column;
		align-items: center;
		text-align: left;

		h1 {
			padding-left: 20px;
		}

		p {
			width: 439px;
			padding-left: 20px;
		}
	}
`;

export const HomeBottomSubContainer = styled.div`
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		display: flex;
	}
`;
