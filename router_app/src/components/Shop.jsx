// packages
import React, { Component } from 'react';
// components
import Container from './Container';

const Shop = ({
  masterData,
  cartData
}) => {

  const shopData = masterData;
  return (
    <Container title='Shop page' >
      <ul>
        {shopData.map(item =>
          <li key={item.id}>
            <div className="shopItem">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>価格： {item.price}円</p>
              <p>在庫数： 残り{item.count}個</p>
              <button>カートに入れる</button>
            </div>
          </li>
        )}
      </ul>
    </Container>
  );
};

export default Shop;