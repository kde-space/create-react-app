import React, { Component } from 'react';
import CartItem from './CartItem';

/**
 * カートページ
 */
const Cart = ({ cartData }) => {
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
              <CartItem item={item} />
            </li>
          )}
        </ul>
      </React.Fragment>
  }

  return (
    <div>
      <h2>Cart</h2>
      <div>{cartDom}</div>
    </div>
  );
};

export default Cart;