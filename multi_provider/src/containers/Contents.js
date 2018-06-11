import React, { Component } from 'react';
import HeaderToggleBtn from '../components/HeaderToggleBtn';
import SnackbarBtn from '../components/SnackbarBtn';

class Contents extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ backgroundColor: '#eee', margin: '10px 0', padding: 10 }}>
        <h2>Contents</h2>
        <HeaderToggleBtn />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis cum? Labore molestiae officiis itaque iure nemo neque praesentium. Adipisci ullam sint minima maiores itaque, libero harum distinctio quia optio.</p>
        </div>
        <SnackbarBtn />
      </div>
    );
  }
}

export default Contents;