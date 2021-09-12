import styled from "styled-components";

export const NavContainer = styled.div`
	margin: 0 auto;
	max-width: 1111px;
	display: flex;
	justify-content: space-between;
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

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		width: 689px;
		padding-bottom: 50px;
	}
`;
