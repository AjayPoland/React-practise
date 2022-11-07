import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello!"
      };
      this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({message:"Good-Bye"});
        console.log(this)
    }
  render() {
    return (
      <div>
        <h2>Message: {this.state.message}</h2>
        <button onClick={this.clickHandler}>Increment</button>
      </div>
    )
  }
}
