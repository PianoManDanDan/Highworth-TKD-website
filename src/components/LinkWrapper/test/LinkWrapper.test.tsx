import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LinkWrapper, LinkWrapperProps } from '../src';

describe('LinkWrapper component', () => {
	describe('When passed the correct props', () => {
		it('renders the LinkWrapper component with all the information mapped correctly', () => {
			// Arrange
			const testImageSrc = 'test image src';
			const testImageAlt = 'test image alt';
			const testLinkSrc = 'test link src';
			const testLinkText = 'test link text';
			const testDescription = 'test description';
			const props: LinkWrapperProps = {
				image: {
					src: testImageSrc,
					alt: testImageAlt,
				},
				link: {
					src: testLinkSrc,
					text: testLinkText,
				},
				description: testDescription,
			};

			// Act
			const { container } = render(<LinkWrapper {...props} />);

			// Assert
			expect(
				container.querySelector('.link-wrapper__image')
			).toBeInTheDocument();
			expect(
				container.querySelector('.link-wrapper__image > a')
			).toHaveAttribute('href', testLinkSrc);

			expect(container.querySelector('img')).toBeInTheDocument();
			expect(container.querySelector('img')).toHaveAttribute(
				'src',
				testImageSrc
			);
			expect(container.querySelector('img')).toHaveAttribute(
				'alt',
				testImageAlt
			);

			expect(
				container.querySelector('.link-wrapper-content__link')
			).toBeInTheDocument();
			expect(
				container.querySelector('.link-wrapper-content__link > a')
			).toHaveAttribute('href', testLinkSrc);
			expect(container).toHaveTextContent(testLinkText);

			expect(
				container.querySelector('.link-wrapper-content__description')
			).toBeInTheDocument();
			expect(container).toHaveTextContent(testDescription);
		});
	});
});
