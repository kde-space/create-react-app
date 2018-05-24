import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const { cartData } = props;
  console.log(cartData);
  const liStyle = {
    display: 'table-cell',
    border: '1px solid #eee'
  };

  const aStyle = {
    display: 'block',
    padding: 10
  }

  const activeStyle = {
    fontWeight: 'bold',
    backgroundColor: '#eee'
  };

  let itemCountDom = 0;
  if (cartData.length > 0) {
    cartData.forEach(item => {
      itemCountDom += item.count;
    });
  }

  return (
    <header >
      <ul style={{
        display: 'table',
        width: '100%',
        margin: 0,
        padding: 0,
        tableLayout: 'fixed',
        textAlign: 'center'
      }}>
        <li style={liStyle}>
          <NavLink style={aStyle} activeStyle={activeStyle} exact to='/'>Home</NavLink>
        </li>
        <li style={liStyle}>
          <NavLink style={aStyle} activeStyle={activeStyle} to='/about'>About</NavLink>
        </li>
        <li style={liStyle}>
          <NavLink style={aStyle} activeStyle={activeStyle} to='/cart'>Cart{itemCountDom === 0 ? '' : `(${itemCountDom})`}</NavLink>
        </li>
        <li style={liStyle}>
          <NavLink style={aStyle} activeStyle={activeStyle} to='/shop'>Shop</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;