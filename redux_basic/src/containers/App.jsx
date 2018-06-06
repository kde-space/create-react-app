import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dispatch, visibleTodos, visibilityFilter, onAddTodo, onToggleTodo, onChangeFilter} = this.props;
    console.log(this.props);
    return (
      <div>
        <AddTodo addTodo={(text) => {
          onAddTodo(text);
        }} />
        <TodoList 
          todos={visibleTodos}
          toggleTodo={(index) => {
            onToggleTodo(index);
          }}
          />
        <Footer 
          visibilityFilter={visibilityFilter}
          onFilterChange={(filter) => {
            onChangeFilter(filter);
          }}
        />
      </div>
    );
  }
}

const selectTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
  }
};

const select = (state) => {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: text => {
      dispatch(addTodo(text));
    },
    onToggleTodo: index => {
      dispatch(toggleTodo(index));
    },
    onChangeFilter: filter => {
      dispatch(setVisibilityFilter(filter));
    }
  }
}

export default connect(select, mapDispatchToProps)(App);
