import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Results from './Results';
import userEvent from '@testing-library/user-event';

describe('Results', () => {
    let results;
    beforeEach(() => {
        results = [
            { id: 'AA1', title: 'Movie', imagePath: 'movie.png', summery: 'something' },
            { id: 'aa1', title: 'Movie1', imagePath: 'movie.png', summery: 'something' },
            { id: 'aa1', title: 'Movie', imagePath: 'movie.png', summery: 'something' },
        ];
    });

    it('should render the movies list', () => {
        render(<Results Results={results}  />);
        
        const movies = screen.getAllByText(/movie/i);
        expect(movies.length).toBeGreaterThan(0);
    });

    it('should show trigger movie details', () => {
        const spy = jest.fn();
        render(<Results Results={results} Details={() => spy()}/>);
        
        const movie = screen.getByText(/movie1/i);
        userEvent.click(movie);
        expect(spy).toBeCalled();
    });
});

