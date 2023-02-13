import React from 'react';

import Header from '../Header/Header';
import Login from '../Login/Login';

import './App.scss';

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Login />
            </>
        );
    }
}

export default App;
