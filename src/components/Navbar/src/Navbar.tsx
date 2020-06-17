import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { navbarLink } from './types';
import './Navbar.scss';

export const Navbar: React.FC<{}> = () => {
	const links: navbarLink[] = [
		{
			text: 'About Us',
			link: '#about',
		},
		{
			text: 'People',
			link: '#people',
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
	];

	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="navbar">
			<div className="app-content-container">
				<button type="button" onClick={() => setMenuOpen(!menuOpen)}>
					<FaBars />
				</button>
				<ul className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
					{links.map((link) => (
						<li key={link.text}>
							<a href={link.link}>{link.text}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
