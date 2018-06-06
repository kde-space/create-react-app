export const addTodo = (text) => {
  return {
    text,
    type: 'ADD_TODO'
  };
};

export const openModal = (text) => {
  return {
    text,
    type: 'OPEN_MODAL',
  };
};

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  };
};
