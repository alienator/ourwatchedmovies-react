import React from 'react';

import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleGoToFinder() {
        this.props.gotoFinder();
    }

    render() {
        return (
            <header>
                <img
                    className='logo'
                    title='our watched movies'
                    alt='our watched movies'
                    src='logo.png' />

                {this.props.User &&
                    <>
                        <img
                            className='user'
                            title={this.props.User.name}
                            alt={this.props.User.name}
                            src={this.props.User.imagePath}
                        />
                        <button
                            type='button'
                            onClick={(e) => {
                                e.preventDefault();
                                this.handleGoToFinder()
                            }}>
                            finder
                        </button>
                    </>
                }
            </header>
        );
    }
}

export default Header;
