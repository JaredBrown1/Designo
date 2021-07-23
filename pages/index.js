import NavBar from "../src/components/nav-bar/NavBarLight";
import Footer from "../src/components/footer/Footer";
import FooterHeader from "../src/components/footer-header/FooterHeader";
import HomeTop from "../src/components/home/home-top/HomeTop";

export default function Home() {
	return (
		<div>
			<NavBar />
			<HomeTop />
			<FooterHeader />
			<Footer />
		</div>
	);
}
