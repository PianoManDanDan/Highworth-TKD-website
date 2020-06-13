import React from 'react';
import { SectionHeadingProps } from './types';
import './SectionHeading.scss';

export const SectionHeading: React.FC<SectionHeadingProps> = ({ text, id }) => {
	return (
		<div id={id} className="section-heading">
			{text}
		</div>
	);
};
