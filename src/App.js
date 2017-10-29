import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import Display from './Display'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="container">
          <Display />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
