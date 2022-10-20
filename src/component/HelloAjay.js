import React, { Component } from 'react'

export default class HelloAjay extends Component {
  render() {
    return (
      <div>
        <h1>Hello Ajay, Hiring: {this.props.name}</h1>
      </div>
    )
  }
}
