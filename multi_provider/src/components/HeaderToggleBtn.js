import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as headerActions from '../actions/header';

class HeaderToggleBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * クリック時の処理
   */
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

// storeのstateからheaderの情報だけpropsから得られるようにする
const mapStateToProps = state => state.header;
// 表示／非表示にするアクションをdispatchするメソッドをpropsから得られるようにする
const mapDispatchToProps = dispatch => ({
  openHeader: () => dispatch(headerActions.open()),
  closeHeader: () => dispatch(headerActions.close())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderToggleBtn);