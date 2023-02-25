import React from 'react';

import UserInfo from '../User/UserInfo.js';
import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModalUserInfo: false
        };
    }

    handleGoToFinder() {
        this.props.gotoFinder();
    }

    showModalUserInfo() {
        this.setState({showModalUserInfo: true});
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
                        <a href='#'
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    this.showModalUserInfo();
                                }
                            }>
                            <img
                                className='user'
                                title={this.props.User.name}
                                alt={this.props.User.name}
                                src={this.props.User.imagePath}
                            />
                        </a>
                        <button
                            id='btn-finder'
                            type='button'
                            onClick={(e) => {
                                e.preventDefault();
                                this.handleGoToFinder()
                            }}>
                            finder
                        </button>
                    </>
                }

                {this.state.showModalUserInfo &&
                 <UserInfo
                     handleSaveUserInfo={
                         (data) => this.props.handleSaveUserInfo(data)}/>}
            </header>
        );
    }
}

export default Header;
