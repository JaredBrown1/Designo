import NavBar from "../src/components/nav-bar/NavBarLight";
import Footer from "../src/components/footer/Footer";
import FooterHeader from "../src/components/footer-header/FooterHeader";
import HomeTop from "../src/components/home/home-top/HomeTop";
import HomeMiddle from "../src/components/home/home-middle/HomeMiddle";
import HomeBottom from "../src/components/home/home-bottom/HomeBottom";

export default function Home() {
	return (
		<div>
			<NavBar />
			<HomeTop />
			<HomeMiddle />
			<HomeBottom />
			<FooterHeader />
			<Footer />
		</div>
	);
}
