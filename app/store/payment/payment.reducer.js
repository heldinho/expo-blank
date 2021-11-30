const initialState = {
  qrcode: {
    data: '',
    type: 256,
  },
  scan: false,
};

export const payment = (state = initialState, action) => {
  switch (action.type) {
    case 'setQrcode':
      return { ...state, qrcode: { ...state.qrcode, ...action.payload } };
    case 'setScan':
      return { ...state, scan: action.payload };
    case 'resetQrcode':
      return initialState;
    default:
      return state;
  }
};
