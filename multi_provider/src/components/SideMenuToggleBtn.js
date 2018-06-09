import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sideMenuActions from '../actions/sideMenu';

class SideMenuToggleBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.isOpen) {
      this.props.closeSideMenu();
    } else {
      this.props.openSideMenu();
    }
  }

  render() {
    return (
      <div>
        サイドメニュー: <button onClick={this.handleClick}>{this.props.isOpen ? 'Close' : 'Open'}</button>
      </div>
    );
  }
}

const mapStateToProps = state => state.sideMenu;
const mapDispatchToProps = dispatch => ({
  openSideMenu: () => dispatch(sideMenuActions.open()),
  closeSideMenu: () => dispatch(sideMenuActions.close())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuToggleBtn);