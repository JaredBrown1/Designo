import styled from "styled-components";

export const AboutMiddleContainer = styled.div`
	margin: 0 auto;
	margin-top: 150px;
	width: 1111px;
	height: 364px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
`;

export const MiddleCities = styled.div`
	width: 350px;
	height: 364px;

	h1 {
		font-size: 20px;
		font-weight: 400;
	}

	button {
		width: 152px;
		height: 56px;
		background-color: var(--col-primary-one);
		border: none;
		border-radius: 10px;
		color: var(--col-primary-three);
	}

	button:hover {
		background-color: var(--col-secondary-one);
		cursor: pointer;
	}
`;
