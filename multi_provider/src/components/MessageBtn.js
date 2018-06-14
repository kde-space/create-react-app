import React, { Component } from 'react';
import{ connect } from 'react-redux';
import * as messageActions from '../actions/message';

class MessageBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    const today = new Date();
    this.today = `${today.getMonth() + 1}月${today.getDate()}日`;
  }

  handleClick() {
    this.props.showMessage(<div>今日は {this.today}です</div>);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Message ボタン（今日は何日？）</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showMessage: (content) => dispatch(messageActions.show(content))
});
export default connect(null, mapDispatchToProps)(MessageBtn);