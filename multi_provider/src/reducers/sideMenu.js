import * as sideMenuActions from '../actions/sideMenu';

const initialState = {
  isOpen: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case sideMenuActions.OPEN:
      return {
        ...state,
        ...{
          isOpen: true
        }
      };
    case sideMenuActions.CLOSE:
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