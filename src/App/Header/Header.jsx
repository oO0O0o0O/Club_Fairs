import React from 'react';

import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div id='header'>
                <div className='header-item'/>
                <h1>Club Fairs<img height='40px' src='./content/uofalogo.png'/></h1>
                <div className='header-item'>
                    <img height='40px' src={this.props.nav.img} onClick={this.props.nav.changePage}/>
                </div>
            </div>
        );
    }
}

export default Header;