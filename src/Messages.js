import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Messages.css'


export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      texts: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSendText = this.handleSendText.bind(this);
  }

  handleInputChange(e) {
    this.setState({
        value: e.target.value
      });
    }

  handleSendText(e) {
    const value = this.state.value
    const messages = this.state.texts;
    messages.push(value);
    e.preventDefault();
    this.setState({
      texts: messages
    })
  }

  render(){
    const style = {
      messgebox: {
        padding: '20px'
      },
      messages: {
        height: '46.5vh',
        width: '25vw'

      }
    }
    var textMessages = this.state.texts;
    return (
      <div>
      <div style={style.messages}>
      <ul>

      {textMessages.map((text,key) => {
        return (
          <li key={key}>{text}</li>
        )
      })}
      </ul>
      </div>

        <TextField
          hintText="Send a text!"
          style={style.messagebox}
          onChange={this.handleInputChange}
          />
          <RaisedButton label="Send" secondary={true} onClick={this.handleSendText}/>

      </div>
    )
  }
}
