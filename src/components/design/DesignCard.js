import {
	CardContainer,
	Cards,
} from "../../../styles/component-styles/design-components/DesignCard.module";

import Image from "next/image";

const DesignCard = (props) => {
	return (
		<Cards>
			<CardContainer>
				<div>
					<Image
						className="avatar"
						src={props.image}
						width={350}
						height={320}
						alt="design"
					/>
					<style jsx global>{`
						.avatar {
							border-top-left-radius: 10px;
							border-top-right-radius: 10px;
						}
					`}</style>
				</div>
				<div>
					<h1>{props.title}</h1>
					<p>{props.subtitleOne}</p>
					<p>{props.subtitleTwo}</p>
				</div>
			</CardContainer>
		</Cards>
	);
};

export default DesignCard;
