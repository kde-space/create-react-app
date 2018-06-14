import React from 'react';
import { connect } from 'react-redux';
import HeaderToggleBtn from '../components/HeaderToggleBtn';
import MessageBtn from '../components/MessageBtn';

const Contents = (props) => {
  return (
  <div style={{ backgroundColor: '#eee', margin: '10px 0', padding: 10 }}>
    <h2>Contents</h2>
    {/* ヘッダーの状態によって文言を変える */}
    <HeaderToggleBtn label={props.isOpen ? 'close' : 'open'}/>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis cum? Labore molestiae officiis itaque iure nemo neque praesentium. Adipisci ullam sint minima maiores itaque, libero harum distinctio quia optio.</p>
    </div>
    <MessageBtn />
  </div>
  );
};

// storeのstateからheaderの情報だけpropsから得られるようにする
const mapStateToProps = state => state.header;
export default connect(mapStateToProps)(Contents);