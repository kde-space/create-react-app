import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price}円</p>
      <p>{item.count}個</p>
      <button>+</button>
      <button>-</button>
      <button>カートから削除</button>
    </div>
  );
};

export default CartItem;