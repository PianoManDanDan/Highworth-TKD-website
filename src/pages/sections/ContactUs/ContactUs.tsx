import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SectionHeading } from '../../../components/SectionHeading/src';
import './ContactUs.scss';

export const ContactUs: React.FC<{}> = () => {
	return (
		<div id="contact">
			<SectionHeading text="Contact Us" />
			<div className="section-body">
				You can contact our head instructor using the following links:
				<br />
				<FontAwesomeIcon icon={faPhoneAlt} className="font-awesome-icon" />
				Call us on <a href="tel:+447795271155">07795 271155</a>.<br />
				<FontAwesomeIcon icon={faEnvelope} className="font-awesome-icon" />
				Email us at{' '}
				<a href="mailto:alisonclack@hotmail.co.uk">alisonclack@hotmail.co.uk</a>
				.
			</div>
		</div>
	);
};
