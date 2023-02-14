import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from './App';
import Api from '../Api/Api';

describe('App', () => {
    it('should render login form', () => {
        render(<App Api={new Api()} />);

        const login = screen.getAllByText(/login/i);
        expect(login.length).toBeGreaterThan(0);
    });

    it('should render finder after a succesfully login', () => {
        //        const spy = jest.spyOn(App.prototype, 'handleLogin');
        const spyLogin = jest.spyOn(Api.prototype, 'login').mockImplementation(() => {
            return true;
        });

        render(<App Api={new Api()} />);

        const email = screen.getByLabelText(/email/i);
        userEvent.type(email, 'u@u.com');

        const password = screen.getByLabelText(/password/i);
        userEvent.type(password, '123AAaaaa');
        
        const but = screen.getByText(/login/i, { selector: 'button' });
        userEvent.click(but);
        expect(spyLogin).toHaveBeenCalled();

        const finder = screen.getAllByLabelText(/find/i);
        expect(finder.length).toBeGreaterThan(0);
    });
});
