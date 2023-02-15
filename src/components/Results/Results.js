import React from 'react';

import Movie from './Movie';
import './Results.scss';

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const movies = this.props.Results.map((movie, index) => {
            return (
                <li key={index}>
                    <Movie Movie={movie} />
                </li>
            );
        });

        return (
            <ul id='results'>
                {movies}
            </ul>
        );
    }
}


export default Results;
