import React from 'react';

import MyClubsEntry from './My_Clubs_Entry.jsx';

class MyClubs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clubIds: []
        }
    }

    componentDidMount() {
        fetch(window.location + 'api/users/' + localStorage.getItem('userId'))
        .then(resp => resp.json())
        .then(user => {
            this.setState({clubIds: user.clubIds});
        });
    }

    render() {
        return (
            <div id='my-clubs'>
                <div className='my-clubs-entry'>
                    <h3 className='my-clubs-entry-name'>Club</h3>
                    <h3 className='my-clubs-entry-status'>Status</h3>
                    <h3 className='my-clubs-entry-options'>Options</h3>
                </div>
                <ul>
                    {this.state.clubIds.map(id => {
                        return <li key={id}><MyClubsEntry clubId={id} changePage={this.props.changePage}/></li>
                    })}
                </ul>
            </div>
        );
    }
}

export default MyClubs;