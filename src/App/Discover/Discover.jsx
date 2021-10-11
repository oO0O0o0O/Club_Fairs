import React from 'react';

import './Discover.css';

import Profile from './Profile.jsx';
import Preview from './Preview.jsx';

class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clubIds: [],
            clubId: null
        }
        this.changeClubId = this.changeClubId.bind(this);
    }

    componentDidMount() {
        fetch(window.location + 'api/clubs/ids')
        .then(response => response.json())
        .then(clubIds => {
            if (sessionStorage.getItem('clubId')) {
                this.setState({clubIds: clubIds, clubId: sessionStorage.getItem('clubId')});
            } else {
                this.setState({clubIds: clubIds});
            }
        });
    }

    changeClubId(id) {
        if (id == null) {
            sessionStorage.removeItem('clubId')
        } else {
            sessionStorage.setItem('clubId', id);
        }
        this.setState({clubId: id});
    }

    render() {
        if (this.state.clubId == null) {
            return (
                <div id='discover'>
                    <ul id='discover-container'>{this.state.clubIds.map(id => {
                        return <li key={id} onClick={() => this.changeClubId(id)}><Preview clubId={id}/></li>
                    })}</ul>
                </div>
            );
        } else {
            return (
                <div id='discover'>
                    <ul id='left-discover-container'>{this.state.clubIds.map((id, index) => {
                        if (index < this.state.clubIds.findIndex(id => id == this.state.clubId)) {
                            return <li key={id} onClick={() => this.changeClubId(id)}><Preview clubId={id}/></li>
                        }
                    })}</ul>
                    <Profile key={this.state.clubId} clubId={this.state.clubId} exitProfile={() => this.changeClubId(null)}/>
                    <ul id='right-discover-container'>{this.state.clubIds.map((id, index) => {
                        if (index > this.state.clubIds.findIndex(id => id == this.state.clubId)) {
                            return <li key={id} onClick={() => this.changeClubId(id)}><Preview clubId={id}/></li>
                        }
                    })}</ul>
               </div>
            );
        }
    }
}

export default Discover;