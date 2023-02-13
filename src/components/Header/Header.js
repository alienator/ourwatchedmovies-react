import React from 'react';

import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img
                    className='logo'
                    title='our watched movies'
                    alt='our watched movies'
                    src='logo.png'/>
            </header>
        );
    }
}

export default Header;
