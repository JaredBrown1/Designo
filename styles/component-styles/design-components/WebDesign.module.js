import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px;

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		flex-direction: column;
	}
`;
