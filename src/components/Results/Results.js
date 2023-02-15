import React from 'react';

import Movie from './Movie';

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
            <div id='results'>
                {movies}
            </div>
        );
    }
}


export default Results;
