import React, { Component } from 'react';
import{ connect } from 'react-redux';
import * as snackbarActions from '../actions/snackbar';

class SnackbarBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(content) {
    this.props.showSnackbar(content);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(null, <strong>some message</strong>)}>Message ボタン</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showSnackbar: (content) => dispatch(snackbarActions.show(content))
});
export default connect(null, mapDispatchToProps)(SnackbarBtn);