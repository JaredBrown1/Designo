import { TitleContainer } from "../../../styles/component-styles/design-components/DesignTitle.module";

const DesignTitle = (props) => {
	return (
		<TitleContainer>
			<h1>{props.title}</h1>
			<p>{props.subtitleOne}</p>
			<p>{props.subtitleTwo}</p>
		</TitleContainer>
	);
};

export default DesignTitle;
