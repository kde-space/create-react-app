import React from 'react';

const Container = (props) => {
  return (
    <div className="container">
      <h1 className="pageTitle">{props.title}</h1>
      <div className="contents">{props.children}</div>
    </div>
  );
};

export default Container;