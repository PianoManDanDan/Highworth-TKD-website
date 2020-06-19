import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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
		<nav className="navbar">
			<div className="app-content-container">
				<button type="button" onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? (
						<FaTimes className="nav-icon nav-icon__open" />
					) : (
						<FaBars className="nav-icon__closed" />
					)}
				</button>
				<ul className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
					{links.map((link) => (
						<li key={link.text}>
							<a href={link.link} onClick={() => setMenuOpen(false)}>
								{link.text}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
