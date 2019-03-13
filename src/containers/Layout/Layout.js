import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from './../../components/about/about'
import Gallery from './../../containers/Gallery/Gallery'
import Home from './../../components/home/home';
import NoPage from './../../components/nopage/nopage';
import Navbar from './../../components/navbar/navbar';

class Layout extends React.Component {
    state = {
        isDark: false
    }

    toggleTheme = () => {
        const newTheme = !this.state.isDark;
        this.setState({
            isDark: newTheme
        })
    }

    render() {
        return  (
            <div>
                <Navbar />
                NavBar should include options
                <br />
                <br />
                <br />
                <Switch>
                    <Route path="/gallery" exact component={Gallery}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/" exact component={Home} />
                    <Route component={NoPage} />
                </Switch>
                
            </div>
        )
    }
}

export default Layout