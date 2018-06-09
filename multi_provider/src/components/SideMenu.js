import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sideMenuActions from '../actions/sideMenu';

const SideMenu = (props) => {
  if (props.isOpen) {
    return (
      <div>
        sideMenu <button onClick={props.closeSideMenu}>Close</button>
      </div>
    );
  }
  return null;
}

const mapStateToProps = state => state.sideMenu;
const mapDispatchToProps = dispatch => ({
  closeSideMenu: () => dispatch(sideMenuActions.close())
});
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);