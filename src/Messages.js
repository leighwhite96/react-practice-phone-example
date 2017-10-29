import React, { Component } from 'react'
import TextField from 'material-ui/TextField';

export default class Messages extends Component {
  render(){
    const style = {
      messgebox: {
        padding: 10
      },
      messages: {
        height: '56.5vh'
      }
    }
    return (
      <div>
      <div style={style.messages}>
      </div>
        <TextField
          hintText="Send a text!"
          style={style.messagebox}
          />
      </div>
    )
  }
}
