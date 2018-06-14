import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as messageActions from '../actions/message';

const styles = {
  padding: 10,
  color: '#fff',
  backgroundColor: '#333',
};

class Message extends Component {
  constructor(props) {
    super(props);
    this.timerID = null;
    // bind
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    if (!this.props.isShow) return;
    if (this.timerID !== null) {
      window.clearTimeout(this.timerID);
    }
    this.timerID = window.setTimeout(() => { this.props.hideMessage(); }, 3000);
  }

  handleClick() {
    this.props.hideMessage();
  }

  render() {
    if (!this.props.isShow) { return null; }
    return (
      <div style={{ ...styles }}>
        {this.props.content} <button onClick={this.handleClick}>Close</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.message;
}
const mapDispatchToProps = dispatch => ({
  hideMessage: () => dispatch(messageActions.hide())
});
export default connect(mapStateToProps, mapDispatchToProps)(Message);