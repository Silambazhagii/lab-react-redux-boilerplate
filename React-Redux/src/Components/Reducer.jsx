export const reducer = (state = 0, action) => {

  if (action.type == 'increment') {
    return state + 1;
  } else if (action.type == 'decrement') {
    if (state > 0) {
      return state - 1;
    }
  }
  return state;
};