export const setPeriod = payload => {
  return dispatch => {
    dispatch({ type: 'setPeriod', payload });
  };
};
export const setFilterType = payload => {
  return dispatch => {
    dispatch({ type: 'setFilterType', payload });
  };
};
export const setValues = payload => {
  return dispatch => {
    dispatch({ type: 'setValues', payload });
  };
};
export const setVisibleModalPeriod = payload => {
  return dispatch => {
    dispatch({ type: 'setVisibleModalPeriod', payload });
  };
};

export const resetExtract = () => {
  return dispatch => {
    dispatch({ type: 'resetExtract' });
  };
};
