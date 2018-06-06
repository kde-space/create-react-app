const initialState = {
  todos: [],
  modal: {
    isOpen: false,
    text: ''
  }
};

export default function appReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          action.text
        ]
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        ...{
          modal: {
            isOpen: true,
            text: action.text
          }
        }
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        ...{
          modal: {
            isOpen: false,
            text: ''
          }
        }
      };
    default:
      return state;
  }
}