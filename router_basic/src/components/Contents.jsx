import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class PageNation extends Component {
  constructor(props) {
    super(props);

    this.handleClickAnchor = this.handleClickAnchor.bind(this);
    console.log(props);
  }

  handleClickAnchor(text, event) {
    // event.preventDefault();
    this.props.changeText(text);
  }

  render() {
    return (
      <ul>
        <li><Link to="hoge" onClick={this.handleClickAnchor.bind(this, 'aaaa')}>pageNation1</Link></li>
        <li><a href="#2" onClick={this.handleClickAnchor.bind(this, 'bbbb')}>pageNation2</a></li>
        <li><a href="#3" onClick={this.handleClickAnchor.bind(this, 'cccc')}>pageNation3</a></li>
      </ul>
    )
  }
}