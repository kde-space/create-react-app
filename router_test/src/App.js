import React from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/friends' component={Friends} />
            <Route exact path='/404' component={NotFound} />
            <Redirect to='/404' />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

/**
 * 404ページ
 */
function NotFound() {
  return (
    <div>404 Page Not Found.</div>
  )
}

function Header() {
  const styleActive = {
    color: '#e00',
    fontWeight: 'bold'
  }
  return (
    <ul>
      <li><NavLink activeStyle={styleActive} exact to='/'>Home</NavLink></li>
      <li><NavLink activeStyle={styleActive} to='/about'>About</NavLink></li>
      <li><NavLink activeStyle={styleActive} to='/friends'>Friends</NavLink></li>
    </ul>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>ようこそ</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>友達に投票できるページです</p>
    </div>
  );
}

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.friendList = [
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
    this.findFriendById = this.findFriendById.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  /**
   * stateの初期化
   */
  componentWillMount() {
    const initialState = {};
    this.friendList.forEach(friend => {
      initialState[friend.id] = 0;
    });
    this.setState(
      ...this.state,
      initialState
    );
  }

  findFriendById(id) {
    return this.friendList.find(friend => friend.id === id);
  }

  handleVote(id) {
    this.setState({
      [id]: this.state[id] + 1
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <h2>Friends</h2>
        <Switch>
          <Route exact path='/friends' render={() =>
            <FriendsList
              list={this.friendList}
              handleVote={this.handleVote}
            />
          }
          />
          <Route exact path='/friends/:id' render={(props) =>
            <Friend
              match={props.match}
              list={this.friendList}
              findFriendById={this.findFriendById}
              vote={this.state}
              history={props.history}
            />
          } />
          <Redirect to='/friends' />
        </Switch>
      </div>
    );
  }
}

function FriendsList(props) {
  const friendsList = props.list;
  const handleVote = props.handleVote;
  return (
    <ul>
      {friendsList.map((friend, index) =>
        <li key={index}>
          <Link to={`friends/${friend.id}`}>{friend.nameJa}</Link>
          <button onClick={() => handleVote(friend.id)}>+</button>
        </li>
      )}
    </ul>
  );
}

function Friend({match, list, findFriendById, vote, history}) {
  const { id } = match.params;
  const friend = findFriendById(id);
  console.log(history);

  if (friend === void 0) {
    return (
      <div>
        <p>No {id}</p>
        <p><button onClick={() => history.replace('/friends')}>back</button></p>
      </div>
    );
  }
  const { family, nameJa, nameEn } = friend;
  const margin0 = { margin: 0 };
  return (
    <div style={{
      display: 'inline-block',
      padding: 20,
      border: '1px solid #ddd'
    }}>
      <p style={margin0}>{family}</p>
      <h2 style={margin0}>{nameJa}</h2>
      <p style={margin0}><small>{nameEn}</small></p>
      <p style={{...margin0, fontWeight: 'bold'}}>投票数: {vote[id]}</p>
    </div>
  );
}

export default App;