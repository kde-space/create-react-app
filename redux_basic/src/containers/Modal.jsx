import React, { Component } from 'react';
import { connect } from 'react-redux';

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>開閉状態：{this.props.isOpen ? 'Open' : 'Close'}</p>
        <p>内容: {this.props.text}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.modal.isOpen,
    text: state.modal.text
  };
};

export default connect(mapStateToProps)(Modal);