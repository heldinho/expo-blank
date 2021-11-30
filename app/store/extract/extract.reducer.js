const initialState = {
  period: {
    start: 0,
    end: 0,
  },
  filterType: [],
  values: {
    low: 0,
    high: 500000,
  },
  visibleModalPeriod: false,
};

export const extract = (state = initialState, action) => {
  switch (action.type) {
    case 'setPeriod':
      return { ...state, period: { ...state.period, ...action.payload } };
    case 'setFilterType':
      return { ...state, filterType: action.payload };
    case 'setValues':
      return { ...state, values: { ...state.values, ...action.payload } };
    case 'setVisibleModalPeriod':
      return { ...state, visibleModalPeriod: action.payload };
    case 'resetExtract':
      return initialState;
    default:
      return state;
  }
};
