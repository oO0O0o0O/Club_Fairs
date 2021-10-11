import React from 'react';

import './Account.css';

import Settings from './Settings.jsx';
import MyClubs from './My_Clubs.jsx';

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            window: this.props.window,
            user: {
                username: null,
                name: null,
                grade: null,
                email: null
            }
        };
        this.changeWindow = this.changeWindow.bind(this);
    }

    componentDidMount() {
        const userId = localStorage.getItem('userId');
        if (userId != null) {
            fetch(window.location + 'api/users/' + localStorage.getItem('userId'))
            .then(response => response.json())
            .then(user => {
                this.setState({user: {
                    username: user.username,
                    name: user.name,
                    grade: user.grade,
                    email: user.email,
                }});
            })
        }
    }

    changeWindow(window) {
        this.setState({window: window});
    }
 
    render() {
        switch (this.state.window) {
            case 'settings':
                return (
                    <div id='account'>
                        <div className='nav-window'>
                            <div className='button' onClick={() => this.changeWindow('my-clubs')}>My Clubs</div>
                        </div>
                        <h1>Account Settings</h1>
                        <Settings className='account-window' user={this.state.user}/>
                    </div>
                );
            case 'my-clubs':
                return (
                    <div id='account'>
                        <div className='nav-window'>
                            <div className='button' onClick={() => this.changeWindow('settings')}>Account Settings</div>
                        </div>
                        <h1>My Clubs</h1>
                        <MyClubs changePage={this.props.changePage}/>
                    </div>
                );
            }
    }
}

export default Account;