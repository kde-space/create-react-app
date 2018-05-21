import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' render={() => myComponent({ title: 'Home', contents: 'ようこそ' })} />
      <Route path='/about' render={() => myComponent({ title: 'About', contents: '友達に投票するページです' })} />
      <Route path='/friends' render={() => myComponent({ title: 'Friends', contents: '友達のリストです' })} />
    </div>
  </BrowserRouter>
)

const myComponent = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.contents}</p>
    </div>
  );
}
// const Home = (props) => {
// };

// const About = () => (
//   <div>
//     <h2>About</h2>
//     <p>友人に投票するページです</p>
//   </div>
// );

// const Friends = () => (
//   <div>
//     <h2>Friends</h2>
//     <p>フレンズのリスト</p>
//   </div>
// );

export default App;