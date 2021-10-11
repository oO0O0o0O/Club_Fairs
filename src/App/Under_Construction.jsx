import React from 'react';

class UnderConstruction extends React.Component {
    render() {
        return (
            <div id='under-construction'>
                <h2>This page is currently under construction.</h2>
                <button onClick={() => this.props.changePage('discover')}>Return Home</button>
            </div>
        )
    }
}

export default UnderConstruction;