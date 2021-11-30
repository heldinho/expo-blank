export const setCards = payload => {
  return dispatch => {
    dispatch({ type: 'setCards', payload });
  };
};

export const setDebts = payload => {
  return dispatch => {
    dispatch({ type: 'setDebts', payload });
  };
};

export const resetCard = () => {
  return dispatch => {
    dispatch({ type: 'resetCard' });
  };
};
