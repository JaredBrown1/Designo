import styled from "styled-components";

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-top: 50px;
	font-family: "Jost";
	color: var(--col-secondary-two);
	a {
		margin-right: 30px;
		font-size: 14px;
	}
	a:hover {
		text-decoration: underline;
	}
`;
