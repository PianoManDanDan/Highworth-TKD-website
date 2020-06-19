import React from 'react';
import { Banner, BannerProps } from '../src';

const getBannerProps = (): BannerProps => ({
	imageSrc: '/horizontal-logo.svg',
	altText: 'alternative image text',
});

export default {
	title: 'Top Banner',
	component: Banner,
};

export const Story = () => <Banner {...getBannerProps()} />;
