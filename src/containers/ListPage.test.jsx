import React from 'react';
import { render, screen } from '@testing-library/react';
import ListPage from './ListPage';

describe('List page', () => {

	it('renders the list page', async () => {
		render(<ListPage />);

		const ul = await screen.findByRole('list', { name: 'villagers' });

		expect(ul).toBeInTheDocument();
	});

})