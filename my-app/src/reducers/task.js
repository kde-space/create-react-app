const initialState = {
  task: '',
  tasks: []
};

export default function taskReducers(state = initialState, action) {
  switch(action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    case 'CLEAR_INPUT_TASK':
      return {
        ...state,
        task: ''
      };
    case 'ALL_CLEAR':
      return {
        ...state,
        task: '',
        tasks: []
      };
    default:
      return state;
  }
}