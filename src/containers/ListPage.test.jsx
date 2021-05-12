import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListPage from './ListPage';

describe('List page', () => {
	afterEach(() => cleanup());

	it('renders the list page', async () => {
		render(
			<MemoryRouter>
				<ListPage />
			</MemoryRouter>
		);
		
		screen.getByText('Loading!');

		const ul = await screen.findByRole('list', { name: 'villagers' });

		expect(ul).toBeInTheDocument();
		expect(ul).toMatchSnapshot();
	});

})