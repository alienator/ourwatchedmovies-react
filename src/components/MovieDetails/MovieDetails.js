import React from 'react';

import './MovieDetails.scss';
import ModalScores from '../Scores/ModalScores';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModalScores: false,
            scores: this.props.getScores()
        };
    }

    addMovie() {
        this.props.handleAddMovie(this.props.Details);
    }

    showScores() {
        this.setState({
            showModalScores: true,
        });
    }

    handleSaveScore(data) {
        this.props.handleSaveScore(data);
        this.setState({
            scores: this.props.getScores(),
            showModalScores: false
        });
    }

    getEditableScore() {
        let score = {
            value: 0,
            editable: true,
            movieId: this.props.Details.id
        };
        this.state.scores.forEach((s) => {
            if (s.editable) score = s;
            return;
        });

        return score;
    }

    averageScore() {
        if (this.state.scores.length == 0) return 'NN';
        let average = 0;
        this.state.scores.forEach((s) => {
            average += parseFloat(s.value);
        });
        
        average /= this.state.scores.length;
        return average;
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
                        <span>
                            Release Date: {this.props.Details.releaseDate}
                        </span>
                        <span>
                            Global Score: {this.props.Details.globalScore}
                        </span>
                        {this.props.Details.watchedDate &&
                            <>
                                <span>
                                    Watched Date:
                                    {this.props.Details.watchedDate}
                                </span>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.showScores()
                                    }}>
                                    Our Score:
                                    {this.averageScore()}
                                </a>
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
                {this.state.showModalScores &&
                 <ModalScores
                     onSubmit={(data) => this.handleSaveScore(data)}
                     score={this.getEditableScore()}
                 />}
            </div>
        );
    }
}

export default MovieDetails;
