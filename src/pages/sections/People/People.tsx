import React from 'react';
import { SectionHeading } from '../../../components/SectionHeading/src';
import { Profile, ProfileProps } from '../../../components/Profile/src';
import './People.scss';

const Alison: ProfileProps = {
	image: {
		src: '',
		alt: 'Instructor Mrs Alison Lee',
	},
	name: 'Mrs Alison Lee',
	grade: '3rd Degree Instructor',
	bio:
		"Mrs Lee is currently a 3rd Degree Black Belt and is the club's head instrutor.",
};
const Daniel: ProfileProps = {
	image: {
		src: '',
		alt: 'Instructor Mr Daniel Martin',
	},
	name: 'Mr Daniel Martin',
	grade: '3rd Degree Instructor',
	bio: `Mr Martin started Tae Kwon-Do in 2002, training under Mrs Lee. He has over 15 years
		of experience in Tae Kwon-Do, and over 8 years of teaching experience.\nMr Martin 
		currently trains under Master Don Deedigan and also trained under Master Dean Matthews 
		whilst at unversity alongside members of the Welsh national team. Mr Martin reguarly 
		competes at local and national competitions and was also the president of Cardiff University 
		Tae Kwon-Do club from 2017-2018.`,
};
const Andrew: ProfileProps = {
	image: {
		src: '',
		alt: 'Assistant Instructor Mr Andrew Beazer',
	},
	name: 'Mr Andrew Beazer',
	grade: '3rd Degree Assistant Instructor',
	bio:
		'Mr Beazer is currently a 3rd Degree Black Belt and Assistant Instructor.',
};

export const People: React.FC<{}> = () => {
	return (
		<div id="people">
			<SectionHeading text="People" />
			<div className="section-body">
				<Profile {...Alison} />
				<Profile {...Daniel} />
				<Profile {...Andrew} />
			</div>
		</div>
	);
};