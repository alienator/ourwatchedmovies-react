import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formChanged: false,
            validEmail: false,
            validPassword: false
        };
    }

    validateEmail(value) {
        this.setState({ formChanged: true });

        const pattern = /^\w+[\.]*[\w]*@\w*\.\w{2,3}$/;
        const result = (value.match(pattern)) ? true : false;
        this.setState({ validEmail: result });
    }

    validatePassword(value) {
        this.setState({ formChanged: true });

        const pattern = /^.*(?=.{7,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;
        const result = (value.match(pattern)) ? true : false;
        this.setState({validPassword: result});
    }

    submit() {

        if (this.state.validEmail && this.state.validPassword) {
            this.props.onSubmit();
        }
    }

    render() {
        return (
            <form id="login-form">
                <h2>Login</h2>
                <div className='form-body'>
                    <label>
                        Email *
                        <input
                            type="email"
                            name="email"
                            onChange={(e) => this.validateEmail(e.target.value)} />
                    </label>
                    {this.state.formChanged && !this.state.validEmail &&
                        <div className='invalid-input'>
                            Email must be a valid email
                        </div>
                    }
                    
                    <label>
                        Password *
                        <input
                            type="password"
                            name="password"
                            onChange={(e) => this.validatePassword(e.target.value)} />
                    </label>
                    {this.state.formChanged && !this.state.validPassword &&
                        <div className='invalid-input'>
                            Password must be 7 chars long
                        </div>
                    }

                    <button
                        type="button"
                        onClick={() => this.submit()}>login</button>
                </div>
            </form>
        );
    }
}

export default Login;
