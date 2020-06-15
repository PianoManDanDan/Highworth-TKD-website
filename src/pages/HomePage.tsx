import React from 'react';
import { Banner } from '../components/Banner/src';
import { Navbar } from '../components/Navbar/src';
import { AboutUs, People, Classes, ContactUs, Links } from './sections';
import bannerImage from '../../assets/horizontal-logo.svg';

// eslint-disable-next-line @typescript-eslint/ban-types
export const HomePage: React.FC<{}> = () => {
	return (
		<div>
			<Banner
				imageSrc={bannerImage}
				altText="Highworth Tae Kwon-Do Club logo"
			/>
			<Navbar />
			<div className="app-content-container">
				<AboutUs />
				<People />
				<Classes />
				<ContactUs />
				<Links />
			</div>
		</div>
	);
};
