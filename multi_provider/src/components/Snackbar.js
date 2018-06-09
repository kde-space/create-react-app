import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as snackbarActions from '../actions/snackbar';

class Snackbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.hideSnackbar();
  }
  render() {
    if (!this.props.isShow) {
      return null;
    }
    return (
      <div style={{ backgroundColor: '#333', color: '#fff', padding: 10 }}>
        {this.props.content} <button onClick={this.handleClick}>Close</button>
      </div>
    );
  }
}

const mapStateToProps = state => state.snackbar;
const mapDispatchToProps = dispatch => ({
  hideSnackbar: () => dispatch(snackbarActions.hide())
});
export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);