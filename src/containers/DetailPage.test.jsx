import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import DetailPage from './DetailPage';

describe('Detail page', () => {
	afterEach(() => cleanup());

	it('renders the detail page', async () => {
		render(
			<DetailPage />
		);
		
		screen.getByText('Loading!');

	});

})