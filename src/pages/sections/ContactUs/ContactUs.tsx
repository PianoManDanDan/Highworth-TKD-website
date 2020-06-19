import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { SectionHeading } from '../../../components/SectionHeading/src';
import './ContactUs.scss';

export const ContactUs: React.FC<{}> = () => {
	return (
		<div className="section">
			<div id="contact" className="navbar-offset">
				<SectionHeading text="Contact Us" />
				<div className="section-body">
					You can contact our head instructor using the following links:
					<br />
					<FaPhoneAlt className="font-awesome-icon" />
					Call us on <a href="tel:+447795271155">07795 271155</a>.<br />
					<FaEnvelope className="font-awesome-icon" />
					Email us at{' '}
					<a href="mailto:alisonclack@hotmail.co.uk">
						alisonclack@hotmail.co.uk
					</a>
					.
				</div>
			</div>
		</div>
	);
};
