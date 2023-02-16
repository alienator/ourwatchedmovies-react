import React from 'react';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Finder from '../Finder/Finder';
import Results from '../Results/Results';
import MovieDetails from '../MovieDetails/MovieDetails';

import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoged: false,
            userInfo: null,
            results: [],
            movieDetails: null
        };
    }

    handleDetails(id) {
        const movie = this.props.Api.movieDetails(id);
        this.setState({movieDetails: movie});
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
                 <MovieDetails Details={this.state.movieDetails}/>}
            </>
        );
    }
}

export default App;
