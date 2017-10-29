import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import Messages from './Messages'

export default class Inbox extends Component {
  constructor(props){
    super(props);
    this.state = {
      messageBox: false
      }
    this.handleMessageClick = this.handleMessageClick.bind(this)
  }

  handleMessageClick(event){
    event.preventDefault();
    this.setState(
      (prevState) => ({
        messageBox: !prevState.messageBox
      })

    )
  }
  render() {
    const { messageBox } = this.state;
    if(!messageBox){
    return (
      <div>
        <List>
          <Subheader>
            Recent Messages
          </Subheader>
          <ListItem
            primaryText="Gwyneth Harris"
            leftAvatar={<Avatar src="av.png"/>}
            rightIcon={<CommunicationChatBubble />}
            onClick={this.handleMessageClick}
            />
          <ListItem
            primaryText="Jimmy Bandstand"
            leftAvatar={<Avatar src="av1.png"/>}
            rightIcon={<CommunicationChatBubble />}
            />
          <ListItem
            primaryText="Patsy Parker"
            leftAvatar={<Avatar src="av.png"/>}
            rightIcon={<CommunicationChatBubble />}
            />
          <ListItem
            primaryText="Lucy Plum"
            leftAvatar={<Avatar src="av.png"/>}
            rightIcon={<CommunicationChatBubble />}
            />
          <ListItem
            primaryText="Calvin Rice"
            leftAvatar={<Avatar src="av1.png"/>}
            rightIcon={<CommunicationChatBubble />}
            />
        </List>
      </div>
    )
  } else {
    return <Messages />
  }
  }
}
