import React from 'react';

import './Club_Studio.css';

import ClubStudioSettings from './Club_Studio_Settings.jsx';
import ClubStudioMembers from './Club_Studio_Members.jsx';

class ClubStudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {club: {
            name: '',
            profile: '',
            banner: '',
            members: 0,
            url: '',
            about: '',
            memberIds: [],
        }, window: 'studio'}
        this.changeWindow = this.changeWindow.bind(this);
    }

    componentDidMount() {
        fetch(window.location + 'api/clubs/' + sessionStorage.getItem('clubId'))
        .then(response => response.json())
        .then(club => {
            this.setState({ club: {
                name: club.name,
                profile: club.profileSrc,
                banner: club.bannerSrc,
                members: club.memberCount,
                url: club.url,
                about: club.about,
                memberIds: club.memberIds
            }});
        })
    }

    changeWindow(window) {
        this.setState({window: window});
    }

    render() {
        if (this.state.window == 'studio') {
            return (
                <div id='club-studio'>
                    <div className='nav-window'>
                        <div className='button' onClick={() => this.changeWindow('members')}>Members</div>
                    </div>
                    <h1>Club Studio</h1>
                    <ClubStudioSettings club={this.state.club} changePage={this.props.changePage}/>
                </div>
            );
        } else {
            return (
                <div id='club-studio'>
                    <div className='nav-window'>
                        <div className='button' onClick={() => this.changeWindow('studio')}>Settings</div>
                    </div>
                    <h1>Club Studio</h1>
                    <ClubStudioMembers memberIds={this.state.club.memberIds}/>
                </div>
            )
        }
    }
}

export default ClubStudio;