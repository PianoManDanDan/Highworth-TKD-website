import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Navbar, NavbarProps } from '../src';

const getNavbarProps = (): NavbarProps => ({
	linkList: [
		{
			text: text('Link 1 text', 'Link 1'),
			link: '/',
		},
		{
			text: text('Link 2 text', 'Link 2'),
			link: '/',
		},
		{
			text: text('Link 3 text', 'Link 3'),
			link: '/',
		},
	],
});

export default {
	title: 'Navbar',
	component: Navbar,
};

export const Story = () => <Navbar {...getNavbarProps()} />;
