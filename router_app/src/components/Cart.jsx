// packages
import React, { Component } from 'react';
// components
import Container from './Container';
import CartItem from './CartItem';
// modules
import getItemValueById from '../util/getItemValueById';

/**
 * カートページ
 */
const Cart = ({
  masterData,
  cartData,
  changeCartItem
}) => {
  const styleCartItem = {
    listStyle: 'none',
    border: '1px solid #ccc',
    padding: 10
  };

  // カートのコンテンツ作成
  let cartDom = null;
  if (cartData.length === 0) {
    cartDom = <p>カート内に商品はありません</p>
  } else {
    // 合計商品数
    let totalItemCount = 0;
    // 合計価格
    let totalPrice = 0;
    cartData.forEach(item => {
      totalItemCount += item.count;
      totalPrice += item.count * item.price;
    });
    cartDom =
      <React.Fragment>
        <div>合計商品数: {totalItemCount}｜合計価格: {totalPrice}円</div>
        <hr />
        <ul>
          {cartData.map(item =>
            <li key={item.id} style={styleCartItem}>
              <CartItem
                masterCount={getItemValueById(masterData, item.id).count}
                item={item}
                changeCartItem={changeCartItem}
              />
            </li>
          )}
        </ul>
      </React.Fragment>
  }

  return (
    <Container title="Cart">
      <div>{cartDom}</div>
    </Container>
  );
};

export default Cart;