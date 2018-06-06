const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
};

export default function todoAppReducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      };
    case 'TOGGLE_TODO':
      const newTodos = [...state.todos];
      newTodos[action.index].completed = !newTodos[action.index].completed;
      return {
        ...state,
        todos: newTodos
      };
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        visibilityFilter: action.visibilityFilter
      };
    default:
      return state;
  }
}