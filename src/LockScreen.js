import React, { Component } from 'react'
import LockButton from './LockButton'
import './LockScreen.css'


export default class LockScreen extends Component {

  render(){
    return (
      <div handler={this.props.handler} id="lockscreen">
      <LockButton label="Unlock" handler={this.props.handler}/>
      </div>
    )
  }

}
