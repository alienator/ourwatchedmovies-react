import React from 'react';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Finder from '../Finder/Finder';
import Results from '../Results/Results';
import MovieDetails from '../MovieDetails/MovieDetails';
import ModalAddMovie from '../MovieDetails/ModalAddMovie';
import Comments from '../Comment/Comments';
import ModalComment from '../Comment/ModalComment';
import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoged: false,
            userInfo: null,
            results: [],
            movieDetails: null,
            showModalAddMovie: false,
            comments: [],
            showModalComment: false
        };
    }

    handleAddComment() {
        this.setState({showModalComment: true});
    }

    handleSubmitComment(data) {
        this.props.Api.saveComment(data);
        this.setState({showModalComment: false,
                       movieDetails: this.state.movieDetails});
    }
    
    handleAddMovieSubmit(data) {
        const res = this.props.Api.addMovie(data, this.state.movieDetails);
        if (res) {
            this.setState({showModalAddMovie: false,
                           movieDetails: this.state.movieDetails});
        }
    }
    
    handleAddMovie() {
        this.setState({showModalAddMovie: true});
    }
    
    handleDetails(id) {
        const movie = this.props.Api.movieDetails(id);
        const comments = this.props.Api.movieComments(id);
        this.setState({movieDetails: movie, comments: comments});
    }
    
    handleFind(what, where) {
        const results =  this.props.Api.find(what, where);
        this.setState({results: results});
    }
    
    handleLogin() {
        const res = this.props.Api.login();
        if (res) {
            this.setState({
                userLoged: true,
                userInfo: this.props.Api.userInfo()
            });
        }
    }
    
    render() {
        return (
            <>
                <Header User={this.state.userInfo}/>
                
                {!this.state.userLoged &&
                 <Login onSubmit={() => this.handleLogin()}/>}

                {this.state.userLoged &&
                 !this.state.movieDetails && 
                 <Finder onFind={(what, where) => this.handleFind(what, where)}/>}

                {this.state.userLoged &&
                 this.state.results.length > 0 &&
                 !this.state.movieDetails && 
                 <Results
                     Results={this.state.results}
                     Details={(id) => this.handleDetails(id)}/>}

                {this.state.userLoged &&
                 this.state.movieDetails &&                 
                 <MovieDetails
                     Details={this.state.movieDetails}
                     handleAddMovie={() => this.handleAddMovie() }/>}

                {this.state.userLoged && this.state.comments.length > 0 &&
                 <Comments
                     comments={this.state.comments}
                     handleAddComment={() => this.handleAddComment()}/>}

                {this.state.userLoged && this.state.showModalAddMovie &&
                 <ModalAddMovie onSubmit={(data) => this.handleAddMovieSubmit(data)}/>}

                {this.state.userLoged && this.state.showModalComment &&
                 <ModalComment onSubmit={(data) => this.handleSubmitComment(data)}/>}
            </>
        );
    }
}

export default App;
