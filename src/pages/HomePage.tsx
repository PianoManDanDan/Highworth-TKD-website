import React from 'react';
import { Banner } from '../components/Banner/src';
import { Navbar, NavbarProps } from '../components/Navbar/src';
import {
	AboutUs,
	Instructors,
	Classes,
	ContactUs,
	AffiliateLinks,
} from './sections';
import { Footer } from '../components/Footer/src';
import bannerImage from '../../assets/horizontal-logo.svg';

const navbarLinks: NavbarProps = {
	linkList: [
		{
			text: 'About Us',
			link: '#about',
		},
		{
			text: 'Instructors',
			link: '#instructors',
		},
		{
			text: 'Classes',
			link: '#classes',
		},
		{
			text: 'Contact Us',
			link: '#contact',
		},
		{
			text: 'Our Affiliates',
			link: '#links',
		},
	],
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const HomePage: React.FC<{}> = () => {
	return (
		<div>
			<Banner
				imageSrc={bannerImage}
				altText="Highworth Tae Kwon-Do Club logo"
			/>
			<Navbar {...navbarLinks} />
			<div className="app-content-container">
				<AboutUs />
				<Instructors />
				<Classes />
				<ContactUs />
				<AffiliateLinks />
			</div>
			<Footer copyrightText="©2020 Daniel Martin" />
		</div>
	);
};
