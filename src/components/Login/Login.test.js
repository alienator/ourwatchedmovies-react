import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Login from './Login';

describe('Login form', () => {
    it('should render the login form', () => {
        render(<Login />);

        const form = screen.getAllByText(/login/i);
        expect(form[0]).toBeVisible();
    });
});
