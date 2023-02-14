import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Login from './Login';
import userEvent from '@testing-library/user-event';

describe('Login form', () => {
    it('should render the login form', () => {
      render(<Login />);

        const form = screen.getAllByText(/login/i);
        expect(form[0]).toBeVisible();
    });

    it('should validate the inputs onchange', () => {
        render(<Login />);

        const emailInput = screen.getByLabelText(/email/i);
        userEvent.type(emailInput, 'user');

        const emailError = screen.getByText(/email must be a valid email/i);
        expect(emailError).toBeVisible();

        const passwordInput = screen.getByLabelText(/password/i);
        userEvent.type(passwordInput, 'user');

        const passwordError = screen.getByText(/password must be 7 chars long/i);
        expect(passwordError).toBeVisible();
    });

    it('should submit the form only if is valid', () => {
        const spy = jest.fn();
        render(<Login onSubmit={() => spy()}/>);
        
        const emailInput = screen.getByLabelText(/email/i);
        userEvent.type(emailInput, 'user@user.com');

        const passwordInput = screen.getByLabelText(/password/i);
        userEvent.type(passwordInput, 'user123AA');

        const but = screen.getByText(/login/i, {selector: 'button'});
        userEvent.click(but);

        expect(spy).toBeCalled();        
    });
});
