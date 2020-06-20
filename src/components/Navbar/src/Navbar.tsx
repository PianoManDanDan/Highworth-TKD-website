import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavbarProps } from './types';
import './Navbar.scss';

export const Navbar: React.FC<NavbarProps> = ({ linkList }) => {
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
					{linkList.map((link) => (
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
