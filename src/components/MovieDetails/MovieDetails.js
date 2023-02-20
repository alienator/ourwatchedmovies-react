import React from 'react';

import './MovieDetails.scss';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    addMovie() {
        this.props.handleAddMovie(this.props.Details);
    }

    handleShowScores() {
        this.props.hsnldeShowScores();
    }

    render() {
        return (
            <div id="movie-details">
                <div className='image'>
                    <img src={this.props.Details.imagePath} />
                </div>
                <div className='desc'>
                    <h2>{this.props.Details.title}</h2>
                    <p>{this.props.Details.summary}</p>
                    <div className='dates'>
                        <span>Release Date: {this.props.Details.releaseDate}</span>
                        <span>Global Score: {this.props.Details.globalScore}</span>
                        {this.props.Details.watchedDate &&
                            <>
                                <span>Watched Date: {this.props.Details.watchedDate}</span>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.handleShowScores()
                                    }}>
                                    Our Score:
                                    {this.props.Details.ourScore}</a>
                            </>}

                        {!this.props.Details.watchedDate &&
                            <>
                                <button
                                    type='button'
                                    onClick={() => this.addMovie()}>
                                    add to our watched movies</button>
                            </>
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default MovieDetails;
