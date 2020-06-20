import React from 'react';
import { render } from '@testing-library/react';
import 'jest-extended';
import '@testing-library/jest-dom/extend-expect';
import { Navbar, NavbarProps, NavbarLink } from '../src';

const mockFaBars = jest.fn(() => <div />);
const mockFaTimes = jest.fn(() => <div />);

jest.mock('react-icons/fa', () => ({
	FaBars: () => mockFaBars(),
	FaTimes: () => mockFaTimes(),
}));

describe('Navbar component', () => {
	describe('When passed correct props', () => {
		it('renders the component correctly', () => {
			// Arrange
			const testNavbarLink1: NavbarLink = {
				text: 'test Navbar Link 1 text',
				link: 'test Navbar link 1 src',
			};
			const testNavbarLink2: NavbarLink = {
				text: 'test Navbar Link 2 text',
				link: 'test Navbar link 2 src',
			};
			const props: NavbarProps = {
				linkList: [testNavbarLink1, testNavbarLink2],
			};

			// Act
			const { container } = render(<Navbar {...props} />);

			// Assert
			expect(container.querySelector('.nav-links')).toBeInTheDocument();
			expect(container).toHaveTextContent(testNavbarLink1.text);
			expect(container).toHaveTextContent(testNavbarLink2.text);
			// expect(mockFaBars).toHaveBeenCalledTimes(1);
			// expect(mockFaTimes).toHaveBeenCalledTimes(1);
		});
	});
});
