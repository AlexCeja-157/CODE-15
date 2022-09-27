import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    return (
      <li className='d-flex w-50 justify-content-between'>
        <h3>{ `${this.props.name}  ${this.props.lastname}`}</h3>
        <button onClick={() => this.props.Saludar(this.props.name, this.props.lastname) }> Saludar </button>
      </li>
    )
  }
}
