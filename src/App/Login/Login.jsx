import React from 'react';

import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {window: 'landing'}
        this.attemptLogin = this.attemptLogin.bind(this);
    }

    attemptLogin() {

    }

    render() {
        return (
            <div id='login'>
                <div id='login-box'>
                    <h2>Club Fairs</h2>
                </div>
            </div>
        );
    }
}

export default Login;