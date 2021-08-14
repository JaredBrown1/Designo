import {
	ContactFormContainer,
	FormContainer,
} from "../../../styles/component-styles/ContactForm.module";

const ContactForm = () => {
	return (
		<ContactFormContainer>
			<div>
				<h1>Contact Us</h1>
				<p>
					Ready to take it to the next level? Let’s talk about your project or
					<br /> idea and find out how we can help your business grow. If you
					are
					<br /> looking for unique digital experiences that’s relatable to your
					<br /> users, drop us a line.
				</p>
			</div>

			<div>
				<FormContainer>
					<input type="text" placeholder="Name" required />
					<input type="email" placeholder="Email Address" required />
					<input type="tel" placeholder="Phone" required />
					<textarea
						name="Message"
						placeholder="Your Message"
						cols="30"
						rows="10"
						required
					></textarea>
					<button>SUBMIT</button>
				</FormContainer>
			</div>
		</ContactFormContainer>
	);
};

export default ContactForm;
