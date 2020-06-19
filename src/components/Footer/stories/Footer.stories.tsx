import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Footer, FooterProps } from '../src';

const getFooterProps = (): FooterProps => ({
	copyrightText: text('Copyright Text', '©2020'),
});

export default {
	title: 'Footer',
	component: Footer,
};

export const Story = () => <Footer {...getFooterProps()} />;
