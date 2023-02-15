import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Finder from './Finder';
import userEvent from '@testing-library/user-event';

describe('Finder', () => {
    it('should render finer', () => {
        render(<Finder />);

        const find = screen.getByLabelText(/find/i);
        expect(find).toBeVisible();
    });

    it('should trigger onFind when find', () => {
        const spy = jest.fn();
        
        render(<Finder onFind={(what, where) => spy(what, where)}/>);

        const what = screen.getByLabelText(/what/i, {selector: 'input'});
        userEvent.type(what, 'ghost');
        
        const but = screen.getByLabelText(/find/i);
        userEvent.click(but);
        
        expect(spy.mock.calls[0][0]).toBe('ghost');
        expect(spy.mock.calls[0][1]).toBe('all');
    });
});
