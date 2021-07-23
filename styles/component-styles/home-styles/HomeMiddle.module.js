import styled from "styled-components";

export const HomeMiddleContainer = styled.div`
	margin: 0 auto;
	max-width: 1111px;
	height: 640px;
	margin-bottom: 120px;
	display: flex;
	color: var(--col-primary-three);
`;

export const WebDesign = styled.div`
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("/image-web-design-large.jpg");
	width: 541px;
	height: 640px;
	border-radius: 10px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h1 {
		font-size: 40px;
		font-weight: 400;
	}
	p {
		font-size: 15px;
	}
	&:hover {
		background: linear-gradient(
				90deg,
				rgba(231, 129, 107, 0.8) 0%,
				rgba(231, 129, 107, 0.8) 35%,
				rgba(231, 129, 107, 0.8) 100%
			),
			url("/image-web-design-large.jpg");
	}
`;

export const AppDesign = styled.div`
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("/image-app-design.jpg");
	width: 541px;
	height: 308px;
	border-radius: 10px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: 20px;
	margin-bottom: 23px;
	h1 {
		font-size: 40px;
		font-weight: 400;
	}
	p {
		font-size: 15px;
	}
	&:hover {
		background: linear-gradient(
				90deg,
				rgba(231, 129, 107, 0.8) 0%,
				rgba(231, 129, 107, 0.8) 35%,
				rgba(231, 129, 107, 0.8) 100%
			),
			url("/image-app-design.jpg");
	}
`;
export const GraphicDesign = styled.div`
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("/image-graphic-design.jpg");
	width: 541px;
	height: 308px;
	border-radius: 10px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: 20px;
	h1 {
		font-size: 40px;
		font-weight: 400;
	}
	p {
		font-size: 15px;
	}
	&:hover {
		background: linear-gradient(
				90deg,
				rgba(231, 129, 107, 0.8) 0%,
				rgba(231, 129, 107, 0.8) 35%,
				rgba(231, 129, 107, 0.8) 100%
			),
			url("/image-graphic-design.jpg");
	}
`;
