import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom'

class PageNation extends Component {
  constructor(props) {
    super(props);

    this.handleClickAnchor = this.handleClickAnchor.bind(this);
    console.log(props);
  }
  componentWillReceiveProps = () => {
    const params = new URLSearchParams(this.props.location.search);
    console.log(params);
    
    // this.props.setKeywordAndOrder(params.get('keyword'), params.get('order'));
  };

  handleClickAnchor(text, event) {
    event.preventDefault();
    this.props.changeText(text);
    this.props.history.push('/?hogehoge=1111')
  }

  render() {
    console.log(this.props);
    
    return (
      <ul>
        <li><a href="#" onClick={this.handleClickAnchor.bind(this, 'aassssaa')}>pageNation1</a></li>
        <li><a href="#2" onClick={this.handleClickAnchor.bind(this, 'bbbb')}>pageNation2</a></li>
        <li><a href="#3" onClick={this.handleClickAnchor.bind(this, 'cccc')}>pageNation3</a></li>
      </ul>
    )
  }
}

export default withRouter(PageNation);