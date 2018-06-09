import * as snackbarActions from '../actions/snackbar';

const initialState = {
  isShow: false,
  content: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case snackbarActions.SHOW:
      return {
        ...state,
        ...{
          isShow: true,
          content: action.content
        }
      };
    case snackbarActions.HIDE:
      return {
        ...state,
        ...{
          isShow: false,
          content: null
        }
      }
    default:
      return state;
  }
}