import React from 'react';

import './index.css';

import Login from './Login/Login.jsx';
import Header from './Header/Header.jsx';
import Discover from './Discover/Discover.jsx';
import Account from './Account/Account.jsx';
import ClubStudio from './Club_Studio/Club_Studio.jsx';
import UnderConstruction from './Under_Construction.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'discover',
            prevPage: 'discover'
        }
        this.changePage = this.changePage.bind(this);
    }

    changePage(newPage) {
        this.setState({page: newPage});
    }

    render() {
        switch (this.state.page) {
            case 'discover':
                return (
                    <div id='app'>
                        <Header search={true} nav={{img: './content/account.png', changePage: () => this.changePage('account')}}/>
                        <Discover changePage={this.changePage}/>
                    </div>
                );
            // case 'account':
            //     return (
            //         <div id='app'>
            //             <Header search={false} nav={{img: './content/home.png', changePage: () => this.changePage('discover')}}/>
            //             <Account window='settings' changePage={this.changePage}/>
            //         </div>
            //     );
            // case 'my-clubs':
            //     return (
            //         <div id='app'>
            //             <Header search={false} nav={{img: './content/home.png', changePage: () => this.changePage('discover')}}/>
            //             <Account window='my-clubs' changePage={this.changePage}/>
            //         </div>
            //     )
            // case 'club-studio':
            //     return (
            //         <div id='app'>
            //             <Header search={false} nav={{img: './content/account.png', changePage: () => this.changePage('account')}}/>
            //             <ClubStudio changePage={this.changePage}/>
            //         </div>
            //     )
            // case 'login':
            //     return (
            //         <div id='app'>
            //             <Login/>
            //         </div>
            //     )
            default:
                return (
                    <div id='app'>
                        <UnderConstruction changePage={this.changePage}/>
                    </div>
                );
        }
    }
}

export default App;