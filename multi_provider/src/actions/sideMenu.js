export const OPEN = 'sideMenu/open';
export const CLOSE = 'sideMenu/close';

export const open = (content) => ({
  type: OPEN
});

export const close = () => ({
  type: CLOSE
});