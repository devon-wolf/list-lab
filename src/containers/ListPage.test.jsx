import React from 'react';
import { render, screen } from '@testing-library/react';
import ListPage from './ListPage';

describe('List page', () => {

	it('renders the list page', () => {
		render(<ListPage />);
		screen.getByText('CHECK IT OUT');
	});

})