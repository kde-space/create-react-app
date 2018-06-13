import React, { Component } from 'react';
import{ connect } from 'react-redux';
import * as messageActions from '../actions/message';

class MessageBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.showMessage(<div>今日は {new Date().getDate()}日</div>);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Message ボタン</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showMessage: (content) => dispatch(messageActions.show(content))
});
export default connect(null, mapDispatchToProps)(MessageBtn);