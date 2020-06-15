import React from 'react';
import { BannerProps } from './types';
import './Banner.scss';

export const Banner: React.FC<BannerProps> = ({ imageSrc, altText }) => {
	return (
		<div className="banner">
			<img className="logo" src={imageSrc} alt={altText} />
		</div>
	);
};
