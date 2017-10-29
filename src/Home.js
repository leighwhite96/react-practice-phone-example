import React, { Component } from 'react';
import LockButton from './LockButton'
import './Home.css'

export default class Home extends Component {
  render(){
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
        color: 'blue'
      },
      slide: {
        padding: 10,
        minHeight: 100
      }
    };
    return (
      <div style={styles.slide} handler={this.props.handler} id="homescreen">
        <h2 style={styles.headline}>Tabs with slide effect</h2>
        Swipe to see the next slide.<br />
        <LockButton label="Lock" handler={this.props.handler}/>
      </div>
    )
  }
}
