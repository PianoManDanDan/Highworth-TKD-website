import React from 'react';
import { AboutUs, People, Classes, ContactUs, Links } from './sections';

// eslint-disable-next-line @typescript-eslint/ban-types
export const HomePage: React.FC<{}> = () => {
	return (
		<div>
			<AboutUs />
			<People />
			<Classes />
			<ContactUs />
			<Links />
		</div>
	);
};
