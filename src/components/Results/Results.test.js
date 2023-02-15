import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Results from './Results';

describe.only('Results', () => {
    it.only('should render the movies list', () => {
        const results = [
            {id: 'AA1', title: 'Movie', imagePath: 'movie.png', summery: 'something'},
            {id: 'aa1', title: 'Movie', imagePath: 'movie.png', summery: 'something'},
            {id: 'aa1', title: 'Movie', imagePath: 'movie.png', summery: 'something'},
        ];
        
        render(<Results Results={results}/>);

        const movies = screen.getAllByText(/movie/i);
        expect(movies.length).toBeGreaterThan(0);
    });
});
