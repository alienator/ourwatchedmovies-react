import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './Header';

describe('Header', () => {
    it('should render the header', () => {
        render(<Header/>);

        const logo = screen.getByTitle(/our watched movies/i);
        expect(logo).toBeVisible();
    });

    it('should render the user', () => {
        const user = {
            name: 'User Loged',
            imagePath: 'user.png'
        };
        render(<Header User={user} />);

        const img = screen.getByAltText(/user loged/i);
        expect(img).toBeVisible();
    });
});
