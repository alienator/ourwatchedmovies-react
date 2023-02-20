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
                <a
                    key={index}
                    href="#"
                    onClick={() => this.props.Details(movie.id)}>
                    <Movie Movie={movie} Details={() => this.props.Details()}/>
                </a>
            );
        });

        return (
            <div id='results'>
                {movies}
            </div>
        );
    }
}


export default Results;
