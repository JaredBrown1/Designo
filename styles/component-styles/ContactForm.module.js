import styled from "styled-components";

export const ContactFormContainer = styled.div`
	background-image: url("/Group 64 Copy.png");
	margin: 0 auto;
	margin-top: 50px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 1111px;
	height: 480px;
	color: var(--col-primary-three);

	h1 {
		font-size: 48px;
		font-weight: 400;
	}

	p {
		line-height: 26px;
	}
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;

	input {
		background: transparent;
		width: 380px;
		height: 38px;
		border: none;
		border-bottom: 1px solid var(--col-primary-three);
		color: var(--col-primary-three);
		padding-left: 10px;
		outline: none;

		::placeholder {
			color: var(--col-primary-three);
			opacity: 0.5;
			font-family: "Jost";
		}

		:focus {
			border-bottom: 3px solid;

			::placeholder {
				opacity: 1;
			}
		}
	}

	textarea {
		background: transparent;
		width: 380px;
		height: 102px;
		border: none;
		border-bottom: 1px solid var(--col-primary-three);
		resize: none;
		color: var(--col-primary-three);
		padding-top: 20px;
		padding-left: 10px;
		outline: none;

		::placeholder {
			color: var(--col-primary-three);
			opacity: 0.5;
			font-family: "Jost";
		}

		:focus {
			border-bottom: 3px solid;

			::placeholder {
				opacity: 1;
			}
		}
	}

	button {
		width: 152px;
		height: 56px;
		border: none;
		border-radius: 10px;
		cursor: pointer;
		margin-top: 20px;
		margin-left: 230px;
	}

	button:hover {
		background-color: var(--col-secondary-one);
		color: var(--col-primary-three);
	}
`;
