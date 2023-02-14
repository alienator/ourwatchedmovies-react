import React from 'react';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Finder from '../Finder/Finder';

import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoged: false
        };
    }
    
    handleLogin() {
        const res = this.props.Api.login();
        if (res) this.setState({userLoged: true});
    }
    
    render() {
        return (
            <>
                <Header />
                
                {!this.state.userLoged &&
                 <Login onSubmit={() => this.handleLogin()}/>}

                {this.state.userLoged &&
                 <Finder />}
            </>
        );
    }
}

export default App;
