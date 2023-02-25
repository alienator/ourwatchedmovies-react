import React from 'react';

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            changePass: false,
            name: '',
            email: '',
            password: '',
            image: ''
        };
    }

    changeName(newName) {
        this.setState({name: newName});
    }

    changeEmail(newEmail) {
        this.setState({email: newEmail});
    }

    changeImage(newImage) {
        this.setState({image: newImage});
    }

    changePassword(newPassword) {
        this.setState({password: newPassword});
    }

    onChangePassword() {
        this.setState({ changePass: !this.state.changePass });
    }

    onSave() {
        const data = {
            name: this.state.name,
            email: this.state.email,
            pass: this.state.password,
            image: this.state.image
        };
        this.props.handleSaveUserInfo(data);
    }
    
    render() {
        return (
            <div className='modal'>
                <form
                    id="user-info"
                    onSubmit={(e) => { e.preventDefault(); this.onSave() }
                    }>
                    <h2>User info</h2>
                    <div className='form-body'>
                        <label>
                            Name: *
                            <input
                                type='text'
                                onChange={
                                    (e) => this.changeName(e.target.value)}
                            />
                        </label>
                        <label>
                            Email: *
                            <input
                                onChange={
                                    (e) => this.changeEmail(e.target.value)}
                                type='email' />
                        </label>
                        <label>
                            Image:
                            <input
                                onChange={
                                    (e) => this.changeImage(e.target.value)}
                                type='file' />
                        </label>
                        {this.state.changePass &&
                            <>
                                <label>
                                    Password: *
                                    <input
                                        onChange={
                                            (e) =>
                                            this.changePassword(e.target.value)}
                                        type='password' />
                                </label>
                            </>
                        }
                        <a
                            onClick={
                                (e) => {
                                    e.preventDefault(); this.onChangePassword()
                                }
                            }
                            href='#'
                            className='link'
                        >
                            change password
                        </a>
                        <button type='submit'>save</button>
                    </div>
                </form>
            </div>

        );
    }
}
