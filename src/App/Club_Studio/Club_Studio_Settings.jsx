import React from 'react';

class ClubStudioSettings extends React.Component {
    render() {
        return (
            <div id='club-studio-settings'>
                <img id='exit-club-studio' src='./content/back.png' onClick={() => this.props.changePage('my-clubs')}/>
                <p>Name:<input id='club-name-field' defaultValue={this.props.club.name}/></p>
                <p>Profile Picture URL:<input id='club-profile-field' defaultValue={this.props.club.profile}/></p>
                <p>Banner Picture URL:<input id='club-banner-field' defaultValue={this.props.club.banner}/></p>
                <p>Members (Override):<input id='club-members-field' defaultValue={this.props.club.members}/></p>
                <p>Website URL:<input id='club-website-field' defaultValue={this.props.club.url}/></p>
                <p>About:</p>
                <textarea id='club-about-field' defaultValue={this.props.club.about}/>
                <div id='club-studio-buttons'>
                    <div className='button' onClick={this.submit}>Save</div>
                    <div className='button' style={{'backgroundColor': 'red'}} onClick={this.delete}>Delete</div>
                </div>
            </div>
        )
    }
}

export default ClubStudioSettings;