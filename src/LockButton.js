import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const style = {
  margin: 12,
};

class LockButton extends Component {

  render(){
    return (
      <MuiThemeProvider>
        <RaisedButton label={this.props.label} secondary={true} style={style} onClick={this.props.handler} />
      </MuiThemeProvider>
    )
  }
};

export default LockButton
