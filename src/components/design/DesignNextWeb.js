import Link from "next/link";
import Image from "next/image";
import { DesignNextWebCont } from "../../../styles/component-styles/design-components/DesignNextProject.module";

const DesignNextWeb = () => {
	return (
		<div>
			<Link href="/web-design">
				<a>
					<DesignNextWebCont>
						<h1>WEB DESIGN</h1>

						<p>
							VIEW PROJECTS {"            "}
							<Image
								src="/icon-right-arrow.svg"
								alt="arrow"
								width={6}
								height={12}
							/>
						</p>
					</DesignNextWebCont>
				</a>
			</Link>
		</div>
	);
};

export default DesignNextWeb;
