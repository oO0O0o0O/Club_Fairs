import React from 'react';

import ClubMemberEntry from './Club_Member_Entry.jsx';

class ClubStudioMembers extends React.Component {
    render() {
        return (
            <div id='club-studio-members'>
                <div className='club-member-entry'>
                    <h3 className='club-member-entry-username'>Username</h3>
                    <h3 className='club-member-entry-email'>Email</h3>
                    <h3 className='club-member-entry-status'>Status</h3>
                </div>
                <ul>
                    {this.props.memberIds.map(id => {
                        return <li key={id}><ClubMemberEntry memberId={id}/></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ClubStudioMembers;