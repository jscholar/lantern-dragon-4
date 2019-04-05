import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Credits from '../pages/Credits/Credits';
import Gallery from './../pages/Gallery/Gallery';
import Home from './../pages/Home/Home';
import NoPage from '../pages/Nopage/Nopage';
import Library from './../pages/Library/Library'

import Navbar from './../Layout/Navigation/Navbar/Navbar';
import classes from './Layout.module.css';

class Layout extends React.Component {
    state = {
        isDark: false,
        showSettings: false,
    }

    toggleTheme = () => {
        const newTheme = !this.state.isDark;
        this.setState({
            isDark: newTheme
        })
    }

    toggleSettings = () => {
        const newSettingsState = !this.state.showSettings;
        this.setState({
            showSettings: newSettingsState
        })
    }

    render() {
        return  (
            <div className={classes.Layout}>
                <Navbar />

                <div className={classes.ContentWrapper}>
                    <Switch>
                        <Route path="/library" component={Library}/>
                        <Route path="/gallery" component={Gallery}/>
                        <Route path="/credits" component={Credits}/>
                        <Route path="/" exact component={Home} />
                        <Route component={NoPage} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Layout
