import React from 'react';
import { FooterProps } from './types';
import './Footer.scss';

export const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
	return (
		<div className="footer">
			<div className="app-content-container">
				<div className="copyright">{copyrightText}</div>
			</div>
		</div>
	);
};
