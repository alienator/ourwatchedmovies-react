import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from './App';
import Api from '../Api/Api';


describe('App when no user loged', () => {
    it('should render login form', () => {
        render(<App />);
        const login = screen.getAllByText(/login/i);
        expect(login.length).toBeGreaterThan(0);
    });

    afterEach(() => {
        document.getElementsByTagName('body')[0].innerHTML = '';
    });
});

describe('App', () => {
    let spyLogin;
    let spyUserInfo;
    let api;

    beforeEach(() => {
        //        const spy = jest.spyOn(App.prototype, 'handleLogin');
        spyLogin = jest.spyOn(Api.prototype, 'login')
            .mockImplementation(() => {
                return true;
            });

        spyUserInfo = jest.spyOn(Api.prototype, 'userInfo')
            .mockImplementation(() => {
                const user = {
                    name: 'User Loged',
                    imagePath: 'user.png'
                };

                return user;
            });

        spyFind = jest.spyOn(Api.prototype, 'find')
            .mockImplementation(() => { return ''; });

        api = new Api();
        render(<App Api={api} />);

        const email = screen.getByLabelText(/email/i);
        userEvent.type(email, 'u@u.com');

        const password = screen.getByLabelText(/password/i);
        userEvent.type(password, '123AAaaaa');

        const but = screen.getByText(/login/i, { selector: 'button' });
        userEvent.click(but);
        expect(spyLogin).toHaveBeenCalled();
        expect(spyUserInfo).toBeCalled();
    });

    afterEach(() => {
        document.getElementsByTagName('body')[0].innerHTML = '';
    });

    it('should render finder after a succesfully login', () => {
        const finder = screen.getAllByLabelText(/find/i);
        expect(finder.length).toBeGreaterThan(0);

        const user = screen.getByAltText(/user loged/i);
        expect(user).toBeVisible();
    });

    it('should show results for a search', () => {
        jest.spyOn(api, 'find')
            .mockImplementation(() => {
                return [
                    {
                        id: 'MOVIE1',
                        title: 'Movie1',
                        imagePath: 'movie.png',
                        summary: 'some movie'
                    },
                    {
                        id: 'MOVIE1',
                        title: 'Movie1',
                        imagePath: 'movie.png',
                        summary: 'some movie'
                    },
                ];
            });

        const findWhat = screen.getByLabelText(/what/i);
        userEvent.type(findWhat, 'ghost');

        const findBut = screen.getByText(/find/i, { selector: 'button' });
        userEvent.click(findBut);

        const results = screen.getAllByText(/some movie/i);
        expect(results.length).toBeGreaterThan(0);
    });
});
