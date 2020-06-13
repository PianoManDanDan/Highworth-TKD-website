import React from 'react';
import { SectionHeadingProps } from './types';
import './SectionHeading.scss';

export const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => {
	return <div className="section-heading">{text}</div>;
};
