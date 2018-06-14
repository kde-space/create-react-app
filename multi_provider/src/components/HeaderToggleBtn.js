import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as headerActions from '../actions/header';

class HeaderToggleBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.isOpen) {
      this.props.closeHeader();
    } else {
      this.props.openHeader();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.label}</button>
      </div>
    );
  }
}

const mapStateToProps = state => state.header;
const mapDispatchToProps = dispatch => ({
  openHeader: () => dispatch(headerActions.open()),
  closeHeader: () => dispatch(headerActions.close())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderToggleBtn);