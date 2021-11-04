import styled from "styled-components";

export const AppDesignContainer = styled.div`
	margin: 0 auto;
	width: 1120px;

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		width: 768px;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px;

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		flex-direction: column;
	}
`;

export const NextPageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-right: 25px;
	padding-bottom: 80px;

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		flex-direction: column;
	}
`;
