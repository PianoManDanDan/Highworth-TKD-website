import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Profile, ProfileProps } from '../src';

describe('Profile component', () => {
	describe('When passed the correct props', () => {
		it('should render the Profile component with all information', () => {
			// Arrange
			const testImageSrc = 'test image src';
			const testImageAlt = 'test image alt';
			const testName = 'test name';
			const testGrade = 'test grade';
			const testBio = 'test bio';
			const props: ProfileProps = {
				image: {
					src: testImageSrc,
					alt: testImageAlt,
				},
				name: testName,
				grade: testGrade,
				bio: testBio,
			};

			// Act
			const { container } = render(<Profile {...props} />);

			// Assert
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
				container.querySelector('.profile-details__name')
			).toBeInTheDocument();
			expect(container).toHaveTextContent(testName);

			expect(
				container.querySelector('.profile-details__grade')
			).toBeInTheDocument();
			expect(container).toHaveTextContent(testGrade);

			expect(
				container.querySelector('.profile-details__bio')
			).toBeInTheDocument();
			expect(container).toHaveTextContent(testBio);
		});
	});
});
