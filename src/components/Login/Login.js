import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <form id="login-form">
                <h2>Login</h2>
                <div className='form-body'>
                    <label>
                        Email *
                        <input
                            type="email"
                            name="email" />
                    </label>
                    <label>
                        Password *
                        <input
                            type="password"
                            name="password" />
                    </label>
                    <button type="submit">login</button>
                </div>
            </form>
        );
    }
}

export default Login;
