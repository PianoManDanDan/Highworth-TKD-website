import React from 'react';
import { SectionHeading } from '../../../components/SectionHeading/src';
import './AffiliateLinks.scss';
import { LinkWrapperProps } from '../../../components/LinkWrapper/src/types';
import { LinkWrapper } from '../../../components/LinkWrapper/src';
import deediganLogo from '../../../../assets/deedigan-logo.png';
import itfuLogo from '../../../../assets/ITFU.png';

const externalLinks: LinkWrapperProps[] = [
	{
		image: {
			src: deediganLogo,
			alt: 'Master Deedigan Martial Arts logo',
		},
		link: {
			src: 'https://masterdeediganmartialarts.com/',
			text: 'Master Deedigan Martial Arts',
		},
		description: `Master Deedigan Martial Arts Academies is our parent organisation, 
			and sets out our training syllabus. Their chief instructor, Master Don Deedigan, 
			is an 8th Degree black belt with over 30 years of experience in Tae Kwon-Do.`,
	},
	{
		image: {
			src: itfuLogo,
			alt: 'ITF Union logo',
		},
		link: {
			src: 'https://www.itfunion.com/',
			text: 'ITF Union',
		},
		description: `The ITF Union is a global organisation that seeks to unite many different 
				ITF style Tae Kwon-Do organisations under one banner. We are affiliated with them 
				through Master Deedigan.`,
	},
];

export const AffiliateLinks: React.FC<{}> = () => {
	return (
		<div id="links" className="section">
			<SectionHeading text="Our Affiliates" />
			<div className="section-body">
				{externalLinks.map((link) => (
					<LinkWrapper {...link} key={link.link.text} />
				))}
			</div>
		</div>
	);
};
