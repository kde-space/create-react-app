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

export const clearInput = () => ({
  type: 'CLEAR_INPUT'
});

export const clearAll = () => ({
  type: 'CLEAR_ALL'
});
