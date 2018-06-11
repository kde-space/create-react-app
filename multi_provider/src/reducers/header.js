import * as headerActions from '../actions/header';

const initialState = {
  isOpen: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case headerActions.OPEN:
      return {
        ...state,
        ...{
          isOpen: true
        }
      };
    case headerActions.CLOSE:
      return {
        ...state,
        ...{
          isOpen: false
        }
      }
    default:
      return state;
  }
}