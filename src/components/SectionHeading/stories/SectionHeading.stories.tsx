import React from 'react';
import { text } from '@storybook/addon-knobs';
import { SectionHeading, SectionHeadingProps } from '../src';

const getSectionHeadingProps = (): SectionHeadingProps => ({
	text: text('Header text', 'Section Heading'),
});

export default {
	title: 'Section Heading',
	component: SectionHeading,
};

export const Story = () => <SectionHeading {...getSectionHeadingProps()} />;
