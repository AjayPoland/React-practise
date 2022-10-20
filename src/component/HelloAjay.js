import React, { Component } from 'react'

export default class HelloAjay extends Component {
  //in class component destruction is done inside the render method.
  render() {
    const {name,position}=this.props
    return (
      <div>
        <h1>Hello Ajay, Hiring: {name} <br/> Position: {position}</h1>
      </div>
    )
  }
}
