import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Profile, ProfileProps } from '../src';

const getProfileProps = (): ProfileProps => ({
	image: {
		src: './placeholder.png',
		alt: text('Image Alt Text', 'Profile Image Alt Text'),
	},
	name: text('Name', 'General Choi'),
	grade: text('Belt grade', '9th Dan'),
	bio: text('Bio', 'General Choi was the founder of Tae Kwon-Do'),
});

export default {
	title: 'Instructor Profiles',
	component: Profile,
};

export const Story = () => <Profile {...getProfileProps()} />;
