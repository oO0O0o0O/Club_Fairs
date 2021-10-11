import React from 'react';

class ClubMemberEntry extends React.Component {
    render() {
        return (
            <div className='club-member-entry'>
                <p className='club-member-entry-username'>{this.props.memberId}</p>
                <p className='club-member-entry-email'>Email</p>
                <p className='club-member-entry-status'>Status</p>
            </div>
        )
    }
}

export default ClubMemberEntry;