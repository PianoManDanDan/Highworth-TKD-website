import React from 'react';
import ResponsiveNavbar from 'react-responsive-navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import breakpointSizes from '../../../globalStyles/_sizes.scss';
import './Navbar.scss';

export const Navbar: React.FC<{}> = () => {
	return (
		<div className="stuck">
			<ResponsiveNavbar
				menuOpenButton={
					<FontAwesomeIcon
						icon={faBars}
						className="font-awesome-icon__navbar"
					/>
				}
				menuCloseButton={
					<FontAwesomeIcon
						icon={faTimes}
						className="font-awesome-icon__navbar"
					/>
				}
				changeMenuOn={breakpointSizes.smMinBreakpoint}
				largeMenuClassName="navbar navbar-menu"
				smallMenuClassName="navbar burger-menu"
				menu={
					<ul>
						<li>
							<a href="#about">About Us</a>
						</li>
						<li>
							<a href="#people">People</a>
						</li>
						<li>
							<a href="#classes">Classes</a>
						</li>
						<li>
							<a href="#contact">Contact Us</a>
						</li>
						<li>
							<a href="#links">Links</a>
						</li>
					</ul>
				}
			/>
		</div>
	);
};
