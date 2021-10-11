import React from 'react';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit() {
        
    }

    render() {
        return (
            <div id='account-settings'>
                <p>Full Name:<input id='full-name-field' defaultValue={this.props.user.name}/></p>
                <p>Username:<input id='username-field' defaultValue={this.props.user.username}/></p>
                <p>Password:<input id='password-field'/></p>
                <p>Repeat Password:<input id='repeat-password-field'/></p>
                <p>Email:<input id='email-field' defaultValue={this.props.user.email}/></p>
                <p>Grade:<select id='grade-field' defaultValue={this.props.user.grade}>
                        <option value={0}>Freshman</option>
                        <option value={1}>Sophomore</option>
                        <option value={2}>Junior</option>
                        <option value={3}>Senior</option>
                    </select></p>
                <div className='button' onClick={this.submit}>Save</div>
            </div>
        );
    }
}

export default Settings;