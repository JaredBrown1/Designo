import styled from "styled-components";
import Image from "next/image";

export const FooterContainer = styled.div`
	background-color: var(--col-primary-two);
	width: 100%;
	height: 393px;
	a {
		color: var(--col-primary-three);
	}
	p {
		color: gray;
	}
`;

export const NavContainer = styled.div`
	margin: 0 auto;
	padding-top: 80px;
	padding-bottom: 30px;
`;

export const FooterInnerContainer = styled.div`
	margin: 0 auto;
	width: 1111px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 30px;
	border-top: 1px solid gray;
`;

export const StyledLogos = styled.div`
	display: flex;
	padding-top: 70px;
`;

export const StyledLogo = styled.div`
	padding-right: 20px;
`;
