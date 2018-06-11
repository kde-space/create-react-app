export const OPEN = 'header/open';
export const CLOSE = 'header/close';

export const open = (content) => ({
  type: OPEN
});

export const close = () => ({
  type: CLOSE
});