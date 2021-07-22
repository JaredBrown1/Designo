import {
	FooterHeaderContainer,
	Button,
} from "../../../styles/component-styles/FooterHeader.module";

import Link from "next/link";

const FooterHeader = () => {
	return (
		<FooterHeaderContainer>
			<div>
				<h1>
					Let&apos;s talk about <br /> your project
				</h1>
				<p>
					Ready to take it to the next level? Contact us today and find out how
					<br /> our expertise can help your business grow.
				</p>
			</div>
			<div>
				<Link href="/contact">
					<a>
						<Button>GET IN TOUCH</Button>
					</a>
				</Link>
			</div>
		</FooterHeaderContainer>
	);
};

export default FooterHeader;
