import { NavContainer } from "../../../styles/component-styles/NavBar.module";
import Image from "next/image";
import Link from "next/link";

const NavBarLight = () => {
	return (
		<NavContainer>
			<div>
				<Link href="/">
					<a>
						<Image src="/logo-dark.png" alt="logo" width={202} height={27} />
					</a>
				</Link>
			</div>

			<div>
				<Link href="/about">
					<a>OUR COMPANY</a>
				</Link>
				<Link href="/locations">
					<a>LOCATIONS</a>
				</Link>
				<Link href="/contact">
					<a>CONTACT</a>
				</Link>
			</div>
		</NavContainer>
	);
};

export default NavBarLight;
