import React from 'react';

const CartItem = ({
  masterCount,
  item,
  changeCartItem
}) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price}円</p>
      <p>{item.count}個</p>
      <button
        onClick={changeCartItem.bind(null, 'add', item.id)}
        disabled={item.count >= masterCount}
      >+</button>
      <button
        onClick={changeCartItem.bind(null, 'subtract', item.id)}
        disabled={item.count <= 1}
      >-</button>
      <button
        onClick={changeCartItem.bind(null, 'remove', item.id)}
      >カートから削除</button>
    </div>
  );
};

export default CartItem;