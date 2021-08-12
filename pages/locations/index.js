import NavBar from "../../src/components/nav-bar/NavBarLight";
import FooterHeader from "../../src/components/footer-header/FooterHeader";
import Footer from "../../src/components/footer/Footer";
import LocationsContainer from "../../src/components/locations/LocationsContainer";

const Locations = () => {
	return (
		<div>
			<NavBar />

			<LocationsContainer />

			<FooterHeader />
			<Footer />
		</div>
	);
};

export default Locations;
