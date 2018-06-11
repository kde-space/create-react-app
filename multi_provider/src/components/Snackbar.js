import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as snackbarActions from '../actions/snackbar';

const styles = {
  padding: 10,
  color: '#fff',
  backgroundColor: '#333',
};

class Snackbar extends Component {
  constructor(props) {
    super(props);
    // bind
    this.handleClick = this.handleClick.bind(this);
    this.flg = false;
  }

  handleClick() {
    this.props.hideSnackbar();
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

const mapStateToProps = state => state.snackbar;
const mapDispatchToProps = dispatch => ({
  hideSnackbar: () => dispatch(snackbarActions.hide())
});
export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);