import styled from "styled-components";

export const HomeTopContainer = styled.div`
	margin: 0 auto;
	background-image: url("/Oval.png");
	max-width: 1111px;
	height: 640px;
	margin-top: 80px;
	margin-bottom: 120px;
	padding-left: 100px;
	padding-top: 150px;
	color: var(--col-primary-three);

	h1 {
		font-size: 48px;
		font-weight: 500;
		line-height: 48px;
	}

	p {
		font-size: 16px;
		line-height: 26px;
		font-weight: 400;
		padding-bottom: 10px;
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		/* Styles */
		background-image: url("/OvalTablet.png");
		max-width: 689px;
		height: 843px;
		margin: 0 auto;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding-left: 0;

		h1 {
			margin-top: -80px;
		}
	}
`;
