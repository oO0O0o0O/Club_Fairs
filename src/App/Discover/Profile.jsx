import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            profileSrc: null,
            bannerSrc: null,
            about: null,
            focus: [],
            members: 0,
            link: null,
            nameColor: '#ffffff'
        }
        this.followURL = this.followURL.bind(this);
    }

    componentDidMount() {
        fetch(window.location + 'api/clubs/' + this.props.clubId)
        .then(response => response.json())
        .then(club => {
            this.setState({
                profileSrc: club.profileSrc,
                name: club.name,
                themeColor: club.themeColor,
                about: club.about,
                focus: club.focus,
                members: club.memberCount,
                url: club.url,
                nameColor: club.nameColor
            })
        })
    }

    followURL() {
        window.location.href = this.state.url;
    }

    render() {
        return (
            <div id='profile'>
                <div id='profile-header' style={{backgroundColor: this.state.themeColor}}>
                    <img id='profile-pic' src={this.state.profileSrc}/>
                    <h1 id='profile-name' style={{color: this.state.nameColor}}>{this.state.name}</h1>
                    <img id='exit-profile' src='./content/back.png' onClick={this.props.exitProfile}/>
                </div>
                <div id='profile-body'>
                    <div id='profile-about' className='profile-section'>
                        <h4>About</h4>
                        <p>{this.state.about}</p>
                    </div>
                    <div id='profile-focus' className='profile-section'>
                        <h4>Focus</h4>
                        {this.state.focus.map(focus => {
                            return <div className='profile-focus' style={{'background-color': this.state.themeColor}}>{focus}</div>
                        })}
                    </div>
                    <div id='profile-members' className='profile-section'>
                        <h4>Members</h4>
                        <p>{this.state.members}</p>
                    </div>
                    <div id='profile-buttons'>
                        {/* <div className='button'>Follow</div> */}
                        <div className='button' style={{'background-color': this.state.themeColor}} onClick={this.followURL}>Learn More</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;