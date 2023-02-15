import React from 'react';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Finder from '../Finder/Finder';

import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoged: false,
            userInfo: null
        };
    }

    handleFind(what, where) {
        this.props.Api.find(what, where);
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
            </>
        );
    }
}

export default App;
