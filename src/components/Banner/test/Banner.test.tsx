import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Banner, BannerProps } from '../src';

describe('Banner component', () => {
	describe('When passed correct props', () => {
		it('should render the Banner', () => {
			// Arrange
			const testImageSrc = 'test image src';
			const testImageAlt = 'test image alt';
			const props: BannerProps = {
				imageSrc: testImageSrc,
				altText: testImageAlt,
			};

			// Act
			const { container } = render(<Banner {...props} />);

			// Assert
			expect(container.querySelector('img')).toBeInTheDocument();
			expect(container.querySelector('img')).toHaveClass('logo');
			expect(container.querySelector('img')).toHaveAttribute(
				'src',
				testImageSrc
			);
			expect(container.querySelector('img')).toHaveAttribute(
				'alt',
				testImageAlt
			);
		});
	});
});
