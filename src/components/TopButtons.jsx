import React, { Component } from 'react';

class TopButton extends Component {
  render() {
    return <li key={this.props.id} onClick={() => this.props.onClick(this.props.id)}>
      <a>{this.props.name}</a>
    </li>
  }
};

export default TopButton;