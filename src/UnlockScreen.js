import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import Home from './Home'
import Photos from './Photos'
import Inbox from './Inbox'

import './UnlockScreen.css'



export default class UnlockScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render(){

    return (
      <div id="unlocked">
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Home" value={0} />
          <Tab label="Photos" value={1} />
          <Tab label="Inbox" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <Home handler={this.props.handler}/>
          <Photos />
          <Inbox />

        </SwipeableViews>
      </div>
    )
  }
}
