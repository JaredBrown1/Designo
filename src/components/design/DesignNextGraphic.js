import Link from "next/link";
import Image from "next/image";
import { DesignNextGraphicCont } from "../../../styles/component-styles/design-components/DesignNextProject.module";

const DesignNextGraphic = () => {
	return (
		<div>
			<Link href="/graphic-design">
				<a>
					<DesignNextGraphicCont>
						<h1>GRAPHIC DESIGN</h1>

						<p>
							VIEW PROJECTS {"            "}
							<Image
								src="/icon-right-arrow.svg"
								alt="arrow"
								width={6}
								height={12}
							/>
						</p>
					</DesignNextGraphicCont>
				</a>
			</Link>
		</div>
	);
};

export default DesignNextGraphic;
