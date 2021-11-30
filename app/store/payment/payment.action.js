export const setQrcode = payload => {
  return dispatch => {
    dispatch({ type: 'setQrcode', payload });
  };
};

export const resetQrcode = () => {
  return dispatch => {
    dispatch({ type: 'resetQrcode' });
  }
}

export const setScan = payload => {
  return dispatch => {
    dispatch({ type: 'setScan', payload });
  };
};
