import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><NavLink activeStyle={{color: 'red'}} exact to='/'>Home</NavLink></li>
        <li><NavLink activeStyle={{color: 'red'}} to="/about">About</NavLink></li>
        <li><NavLink activeStyle={{color: 'red'}} to="/friends">Friends</NavLink></li>
      </ul>
      <Route exact path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/friends' component={Friends}></Route>
    </div>
  </BrowserRouter>
);

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

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleVote = this.handleVote.bind(this);
  }
  componentWillMount() {
    friendsList.forEach(friend => {
      this.setState({
        ...this.state,
        [friend.id]: 0
      });
    });
  }
  handleVote(id) {
    this.setState({
      [id]: this.state[id] + 1
    });
  }
  render() {
    return (
      <div>
        <h2>Friends</h2>
        <Route exact path='/friends' render={props => <FriendList handleVote={this.handleVote} />} />
        <Route path='/friends/:id' render={props => <Friend match={props.match} vote={this.state} />} />
      </div>
    )
  }
}

const FriendList = (props) => (
  <ul>
    {friendsList.map(friend => (
      <li key={friend.id}>
        <Link to={`/friends/${friend.id}`}>{friend.nameJa}</Link><button onClick={() => props.handleVote(friend.id)}>+</button>
      </li>
    ))}
  </ul>
);

const Friend = (props) => {
  const { id } = props.match.params;
  const friend = friendById(id);
  const vote = props.vote[id];

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
      <p>投票数：{vote}</p>
    </div>
  );
};

export default App;