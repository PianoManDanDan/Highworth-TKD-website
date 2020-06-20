import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer, FooterProps } from '../src';

describe('Footer component', () => {
	describe('When passed the correct props', () => {
		it('renders the Footer component with all information', () => {
			// Arrange
			const testCopyrightText = 'test copyright text';
			const props: FooterProps = {
				copyrightText: testCopyrightText,
			};

			// Act
			const { container } = render(<Footer {...props} />);

			// Assert
			expect(container.querySelector('.copyright')).toBeInTheDocument();
			expect(container).toHaveTextContent(testCopyrightText);
		});
	});
});
