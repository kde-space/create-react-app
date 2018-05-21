import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/friends">Friends</Link></li>
      </ul>
      <Route exact path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/friends' component={Friends}></Route>
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>ようこそ</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>友人に投票するページです</p>
  </div>
);

// 友達リスト
const friendsList = [
  {
    id: 'serval',
    nameJa: 'サーバル',
    nameEn: 'Serval Cat',
    family: 'ネコ目ネコ科ネコ属'
  },
  {
    id: 'raccoon',
    nameJa: 'アライグマ',
    nameEn: 'Common raccoon',
    family: 'ネコ目アライグマ科アライグマ属'
  },
  {
    id: 'fennec',
    nameJa: 'フェネック',
    nameEn: 'Fennec',
    family: 'ネコ目イヌ科キツネ属'
  }
];

/**
 * idにマッチする要素を取得
 * @param {string} id
 */
const friendById = id => friendsList.find(item => item.id === id);

const Friends = () => {
  return (
    <div>
      <h2>Friends</h2>
      <Route exact path='/friends' component={FriendList} />
      <Route path='/friends/:id' component={Friend}></Route>
    </div>
  );
};

const FriendList = () => (
  <ul>
    {friendsList.map(friend => (
      <li key={friend.id}>
        <Link to={`/friends/${friend.id}`}>{friend.nameJa}</Link>
      </li>
    ))}
  </ul>
);

const Friend = (props) => {
  const { id } = props.match.params;
  const friend = friendById(id);

  if (friend === void 0) {
    return (
      <p>Friends with id '{id}' does not exist.</p>
    );
  }
  const margin0 = { margin: 0 };
  return (
    <div style={{ border: '1px gray solid', display: 'inline-block', padding: 10 }}>
      <p style={margin0}>{friend.family}</p>
      <h2 style={margin0}>{friend.nameJa}</h2>
      <p style={margin0}>{friend.nameEn}</p>
    </div>
  );
};

export default App;