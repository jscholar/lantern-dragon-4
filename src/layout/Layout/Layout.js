import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from './../../components/about/about'
import Gallery from './../../containers/Gallery/Gallery'
import Home from './../../components/home/home';
import NoPage from './../../components/nopage/nopage';
import Navbar from './../../components/navbar/navbar';

import Modal from '../../components/UI/modal/Modal';
import classes from './Layout.module.css'

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
                {this.state.showSettings ? <Modal hideModal={this.toggleSettings}>Settings</Modal> : null}
                <Navbar toggleSettings={this.toggleSettings}/>
                <div className={classes.ContentWrapper}>
                <Switch>
                    <Route path="/gallery" exact component={Gallery}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/" exact component={Home} />
                    <Route component={NoPage} />
                </Switch>
                </div>
            </div>
        )
    }
}

export default Layout
