import React from 'react';
import { AboutUs } from './sections';

// eslint-disable-next-line @typescript-eslint/ban-types
export const HomePage: React.FC<{}> = () => {
	return (
		<div>
			<AboutUs />
			<People />
			<ContactUs />
			<Links />
		</div>
	);
};
