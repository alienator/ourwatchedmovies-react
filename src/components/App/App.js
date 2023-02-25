import React from 'react';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Finder from '../Finder/Finder';
import Results from '../Results/Results';
import MovieDetails from '../MovieDetails/MovieDetails';
import ModalAddMove from '../MovieDetails/ModalAddMovie';
import Comments from '../Comment/Comments';
import ModalComment from '../Comment/ModalComment';
import CommentData from '../Comment/CommentData';

import './App.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            findResults: [],
            currentMovie: null,
            showModalAddMovie: false,
            showModalComment: false,
            currentComment: new CommentData()
        };
    }

    gotoFinder() {
        this.setState({currentMovie: null});
    }
    
    showModalComment(comment = new CommentData()) {
        this.setState({ currentComment: comment, showModalComment: true });
    }

    saveComment(data) {
        this.props.Api.saveComment(
            this.state.currentMovie,
            this.state.user, data);
        this.state.showModalComment = false;
        this.showDetails(this.state.currentMovie.id);
    }

    addMovie(data) {
        this.props.Api.addMovie(this.state.currentMovie, this.state.user, data);
        this.state.showModalAddMovie = false;
        this.showDetails(this.state.currentMovie.id);
    }

    handleAddMovie() {
        this.setState({ showModalAddMovie: true });
    }

    showDetails(id) {
        const res = this.props.Api.getMovieDetails(id);
        const comments = this.props.Api.getComments(id);
        this.setState({ currentMovie: res, comments: comments });
    }

    handleLogin(email, password) {
        const res = this.props.Api.login(email, password);
        this.setState({ user: res });
    }

    handleFind(what, where) {
        const res = this.props.Api.find(what, where);
        if (res.length > 0) this.setState({ findResults: res });
    }

    handleSaveUserInfo(data) {
        this.props.Api.saveUser(data);
    }

    renderLogin() {
        return (
            <Login
                onSubmit={(email, pasword) =>
                    this.handleLogin(email, pasword)} />
        );
    }

    handleGetScores() {
        const userId = this.state.user.id;
        const movieId = this.state.currentMovie.id;
        const scores = this.props.Api.getScores(movieId);
        
        return scores;
    }

    renderFinder() {
        return (
            <>
                <Finder
                    onFind={(what, where) => this.handleFind(what, where)} />
                {(this.state.findResults.length > 0) ?
                    <Results Results={this.state.findResults}
                        Details={(id) => this.showDetails(id)} /> : null}
            </>
        );
    }

    renderDetails() {
        return (
            <>
                <MovieDetails
                    Details={this.state.currentMovie}
                    handleAddMovie={() => this.handleAddMovie()}
                    getScores={() => this.handleGetScores()}
                    handleSaveScore={(s) => this.props.Api.saveScore(s)}
                />
                {this.state.currentMovie.watchedDate &&
                    <Comments
                        comments={this.state.comments}
                        handleAddComment={() => { this.showModalComment() }}
                        handleEditComment={
                            (comment) => this.showModalComment(comment)
                        }
                    />}
            </>

        );
    }


    render() {
        const userLoged = (this.state.user) ? true : false;
        const inFinder = (this.state.user && !this.state.currentMovie) ?
            true
            :
            false;

        return (
            <>
                <Header
                    handleSaveUserInfo = {(data) => this.handleSaveUserInfo(data)}
                    User={this.state.user}
                    gotoFinder={() => this.gotoFinder()} />
                {!userLoged ? this.renderLogin() :
                    (inFinder) ? this.renderFinder() : this.renderDetails()}
                {this.state.showModalAddMovie &&
                    <ModalAddMove onSubmit={(data) => this.addMovie(data)} />}
                {this.state.showModalComment &&
                    <ModalComment
                        onSubmit={(data) => this.saveComment(data)}
                        comment={this.state.currentComment}
                    />}

            </>
        );
    }

}
