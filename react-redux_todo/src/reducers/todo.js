import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = [];

export default function todo (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      const newState = [...state];
      newState[action.payload.index].completed = !newState[action.payload.index].completed;
      return newState;
    default:
      return state;
  }
}