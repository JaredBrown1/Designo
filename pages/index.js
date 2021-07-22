import NavBar from "../src/components/nav-bar/NavBarLight";
import Footer from "../src/components/footer/Footer";
import FooterHeader from "../src/components/footer-header/FooterHeader";

export default function Home() {
	return (
		<div>
			<NavBar />
			<h1>This is the landing page</h1>
			<FooterHeader />
			<Footer />
		</div>
	);
}
