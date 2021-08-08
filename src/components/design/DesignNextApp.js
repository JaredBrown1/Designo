import Link from "next/link";
import Image from "next/image";
import { DesignNextAppCont } from "../../../styles/component-styles/design-components/DesignNextProject.module";

const DesignNextApp = () => {
	return (
		<div>
			<Link href="/app-design">
				<a>
					<DesignNextAppCont>
						<h1>APP DESIGN</h1>

						<p>
							VIEW PROJECTS {"            "}
							<Image
								src="/icon-right-arrow.svg"
								alt="arrow"
								width={6}
								height={12}
							/>
						</p>
					</DesignNextAppCont>
				</a>
			</Link>
		</div>
	);
};

export default DesignNextApp;
