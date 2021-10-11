import React from 'react';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: null, src: null, name: null, open: false};
    }

    componentDidMount() {
        fetch(window.location + 'api/clubs/' + this.props.clubId)
        .then(response => response.json())
        .then(club => {
            this.setState({
                id: this.props.clubId,
                src: club.profileSrc,
                name: club.name
            })
        })
    }

    render() {
        if (this.state.open) {
            return (
                <div className='preview' onMouseLeave={() => this.setState({open: false})}>
                    <img className='preview-open' src={this.state.src}/>
                    <h4>{this.state.name}</h4>
                </div>
            );
        } else {
            return (
                <div className='preview' onMouseEnter={() => this.setState({open: true})}>
                    <img className='preview-close' src={this.state.src}/>
                </div>
            );
        }
    }
}

export default Preview;