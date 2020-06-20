import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SectionHeading, SectionHeadingProps } from '../src';

describe('SectionHeading component', () => {
	describe('When passed correct props', () => {
		it('should render the SectionHeading', () => {
			// Arrange
			const testHeading = 'Test Heading';
			const props: SectionHeadingProps = {
				text: testHeading,
			};

			// Act
			const { container } = render(<SectionHeading {...props} />);

			// Assert
			expect(container.querySelector('.section-heading')).toBeInTheDocument();
			expect(container).toHaveTextContent(testHeading);
		});
	});
});
