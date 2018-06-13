export const SHOW = 'message/show';
export const HIDE = 'message/hide';

export const show = (content) => ({
  content,
  type: SHOW
});

export const hide = () => ({
  type: HIDE
});