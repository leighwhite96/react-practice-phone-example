import React from 'react';

import LockScreen from './LockScreen'
import UnlockScreen from './UnlockScreen'

import './Display.css'



export default class Display extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lockClick: false
    };

    this.handleLockClick = this.handleLockClick.bind(this);
  }

  handleLockClick(event) {
    event.preventDefault();
    this.setState(
      (prevState) => ({
        lockClick: !prevState.lockClick
      })
    )
  }

  render() {
      const { lockClick } = this.state;
      if(!lockClick){

      return (
        <UnlockScreen className="screen" handler={this.handleLockClick} />
      )
    } else {
      return (
        <LockScreen className="screen" handler={this.handleLockClick} />

      )
    }
  }
}
