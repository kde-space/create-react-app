import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions';

class ChangeModal extends Component {
  constructor(props) {
    super(props);
    this.textBox = null;

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  handleClickOpen() {
    if (this.textBox.value.trim()) {
      this.props.onOpen(this.textBox.value);
      this.textBox.value = '';
    }
  }

  handleClickClose() {
    this.props.onClose();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <input type="text" ref={el => this.textBox = el} />
        <button onClick={this.handleClickOpen}>Open</button>
        <button onClick={this.handleClickClose}>close</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOpen: (text) => dispatch(openModal(text)),
    onClose: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(ChangeModal);