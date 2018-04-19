const initialState = {
  task: '',
  tasks: []
};

export const taskReducers = (state = initialState, action) => {
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
    case 'CLEAR_INPUT':
      return {
        ...state,
        task: ''
      };
    case 'CLEAR_ALL':
      return {
        task: '',
        tasks: []
      };
    default:
      return state;
  }
};
