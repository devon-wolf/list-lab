import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import DetailPage from './DetailPage';

describe('Detail page', () => {
	afterEach(() => cleanup());

	it('renders the detail page', async () => {
		render(
		
				<DetailPage 
					match={{
						params: {
							villager: '5f5fb4bbbfd05c2aed82e46b'
						}
					}}
				/>
		
		);
		
		screen.getByText('Loading!');

		const div = await screen.findByRole('villager-detail');

		expect(div).toBeInTheDocument();
		expect(div).toMatchSnapshot();
	});

})