import React, { Component } from 'react';
import{ connect } from 'react-redux';
import * as snackbarActions from '../actions/snackbar';

class SnackbarBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.timer = null;
  }

  handleClick(content) {
    this.props.showSnackbar(content);
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(this.props.hideSnackbar, 1000);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(null, <strong>hogehogehoge</strong>)}>スナックバーボタン</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showSnackbar: (content) => dispatch(snackbarActions.show(content)),
  hideSnackbar: () => dispatch(snackbarActions.hide())
});
export default connect(null, mapDispatchToProps)(SnackbarBtn);