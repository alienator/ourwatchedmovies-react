import React from 'react';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Finder from '../Finder/Finder';
import Results from '../Results/Results';

import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoged: false,
            userInfo: null,
            results: []
        };
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
                 <Finder onFind={(what, where) => this.handleFind(what, where)}/>}

                {this.state.userLoged && this.state.results.length > 0 &&
                 <Results Results={this.state.results}/>}
            </>
        );
    }
}

export default App;
