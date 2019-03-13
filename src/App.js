import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Layout from './containers/Layout/Layout';

import classes from './App.module.css'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App
