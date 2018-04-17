export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

export const clearInputTask = () => ({
  type: 'CLEAR_INPUT_TASK'
});

export const allClear = () => ({
  type: 'ALL_CLEAR'
});


