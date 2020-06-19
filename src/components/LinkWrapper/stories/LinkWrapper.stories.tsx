import React from 'react';
import { text } from '@storybook/addon-knobs';
import { LinkWrapper, LinkWrapperProps } from '../src';

const getLinkWrapperProps = (): LinkWrapperProps => ({
	image: {
		src: '/placeholder.png',
		alt: 'Link logo',
	},
	link: {
		src: '/',
		text: text('Link text', 'Link text'),
	},
	description: text('Link Description', 'This is an affiliate link'),
});

export default {
	title: 'Affiliate Link Wrapper',
	component: LinkWrapper,
};

export const Story = () => <LinkWrapper {...getLinkWrapperProps()} />;
