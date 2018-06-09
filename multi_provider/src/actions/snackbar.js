export const SHOW = 'snackbar/show';
export const HIDE = 'snackbar/hide';

export const show = (content) => ({
  content,
  type: SHOW
});

export const hide = () => ({
  type: HIDE
});