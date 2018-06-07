import React from "react";
import { connect } from 'react-redux';

const App = (props) => {
  console.log(props);
  return (
    <div>
      {props.todos.map(todo => todo.text)}
      <button onClick={()=>props.dispatch({type: 'ADD_TODO', payload: {text: 'task1'}})}>task1</button>
      <button onClick={()=>props.dispatch({type: 'ADD_TODO', payload: {text: 'task2'}})}>task2</button>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(App);