import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as headerActions from '../actions/header';
// import * as headerActions from '../actions/header';

const Header = (props) => {
  if (props.isOpen) {
    return (
      <div>
        Header <button onClick={props.closeHeader}>Close</button>
      </div>
    );
  }
  return null;
}

const mapStateToProps = state => state.header;
const mapDispatchToProps = dispatch => ({
  closeHeader: () => dispatch(headerActions.close())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);