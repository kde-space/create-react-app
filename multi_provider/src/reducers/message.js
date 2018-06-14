import * as messageActions from '../actions/message';

const initialState = {
  isShow: false,
  content: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case messageActions.SHOW:
      return {
        isShow: true,
        content: action.content
      }
    case messageActions.HIDE:
      return {
        isShow: false,
        content: null
      }
    default:
      return state;
  }
}