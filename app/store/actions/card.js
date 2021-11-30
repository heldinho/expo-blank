export const setCards = payload => {
  return dispatch => {
    dispatch({ type: 'setCards', payload });
  };
};
