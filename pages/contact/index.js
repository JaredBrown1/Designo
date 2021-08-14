import NavBar from "../../src/components/nav-bar/NavBarLight";
import Footer from "../../src/components/footer/Footer";
import AboutMiddle from "../../src/components/about/AboutMiddle";
import ContactForm from "../../src/components/contact/ContactForm";

const Contact = () => {
	return (
		<div>
			<NavBar />

			<ContactForm />

			<AboutMiddle />

			<Footer />
		</div>
	);
};

export default Contact;
