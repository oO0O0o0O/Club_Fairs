import React from 'react';

class MyClubsEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            status: null,
            options: []
        }
        this.handleChangePage = this.handleChangePage.bind(this);
    }

    componentDidMount() {
        fetch(window.location + 'api/clubs/' + this.props.clubId)
        .then(resp => resp.json())
        .then(club => {
            this.setState({
                name: club.name,
                status: 'Member',
            });
        });
    }

    handleChangePage() {
        sessionStorage.setItem('clubId', this.props.clubId);
        this.props.changePage('club-studio');
    }

    render() {
        return (
            <div className='my-clubs-entry'>
                <p className='my-clubs-entry-name'>{this.state.name}</p>
                <p className='my-clubs-entry-status'>{this.state.status}</p>
                <p className='my-clubs-entry-options'>
                    <button onClick={this.handleChangePage}>Manage</button>
                </p>
            </div>
        )
    }
}

export default MyClubsEntry;