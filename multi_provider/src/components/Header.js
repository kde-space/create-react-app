import React from 'react';
import { connect } from 'react-redux';
import HeaderToggleBtn from './HeaderToggleBtn';

const styles = {
  border: '1px solid #999',
  padding: 10,
  marginBottom: 10
};

const Header = (props) => {
  if (props.isOpen) {
    return (
      <div style={{...styles}}>
        Header <HeaderToggleBtn label={'Close'}/>
      </div>
    );
  }
  return null;
}

// storeのstateからheaderの情報だけpropsから得られるようにする
const mapStateToProps = state => state.header;
export default connect(mapStateToProps)(Header);