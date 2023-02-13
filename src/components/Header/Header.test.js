import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './Header';

describe('Header', () => {
    it('should render the header', () => {
        render(<Header/>);

        const logo = screen.getByTitle(/our watched movies/i);
        expect(logo).toBeVisible();
    });
});
