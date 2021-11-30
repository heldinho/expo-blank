export const Login = payload => {
  return dispatch => {
    dispatch({ type: 'setToken', payload });
  };
};

export const setProject = payload => {
  return dispatch => {
    dispatch({ type: 'setProject', payload });
  };
};

export const setClient = payload => {
  return dispatch => {
    dispatch({ type: 'setClient', payload });
  };
};

export const setOptionToken = payload => {
  return dispatch => {
    dispatch({ type: 'setOptionToken', payload });
  };
};

export const setTab = payload => {
  return dispatch => {
    dispatch({ type: 'setTab', payload });
  };
};

export const setLoadingToken = payload => {
  return dispatch => {
    dispatch({ type: 'setLoadingToken', payload });
  };
};

export const setDialog = payload => {
  return dispatch => {
    dispatch({ type: 'setDialog', payload });
  };
};

export const setKeyToken = payload => {
  return dispatch => {
    dispatch({ type: 'setKeyToken', payload });
  };
};

export const setTimer = payload => {
  return dispatch => {
    dispatch({ type: 'setTimer', payload });
  };
};

export const setStep = payload => {
  return dispatch => {
    dispatch({ type: 'setStep', payload });
  };
};

export const setOnboarding = payload => {
  return dispatch => {
    dispatch({ type: 'setOnboarding', payload });
  };
};

export const setPlan = payload => {
  return dispatch => {
    dispatch({ type: 'setPlan', payload });
  };
};

export const setCheck = payload => {
  return dispatch => {
    dispatch({ type: 'setCheck', payload });
  };
};

export const setZip = payload => {
  return dispatch => {
    dispatch({ type: 'setZip', payload });
  };
};
export const setNumber = payload => {
  return dispatch => {
    dispatch({ type: 'setNumber', payload });
  };
};
export const setComplement = payload => {
  return dispatch => {
    dispatch({ type: 'setComplement', payload });
  };
};

export const setAddress = payload => {
  return dispatch => {
    dispatch({ type: 'setAddress', payload });
  };
};

export const setPhoto = payload => {
  return dispatch => {
    dispatch({ type: 'setPhoto', payload });
  };
};

export const setPhotoType = payload => {
  return dispatch => {
    dispatch({ type: 'setPhotoType', payload });
  };
};

export const setDocType = payload => {
  return dispatch => {
    dispatch({ type: 'setDocType', payload });
  };
};

export const resetOnboarding = () => {
  return dispatch => {
    dispatch({
      type: 'resetOnboarding',
      payload: {
        step: 0,
        onboarding: {
          firstName: '',
          lastName: '',
          name: '',
          phone: '',
          code: '',
          taxId: '',
          day: '',
          month: '',
          year: '',
          email: '',
          nameMother: '',
          password: '',
        },
        address: {},
        zip: '',
        number: '',
        complement: '',

        photoType: '',
        docRg: '',
        docCnh: '',
        selfie: '',
        plan: '',
        check: {
          term: false,
          policy: false,
        },
      },
    });
  };
};

export const reset = () => {
  return dispatch => {
    dispatch({ type: 'setTab', payload: 'login' });
    dispatch({ type: 'setKeyToken', payload: '' });
    dispatch({ type: 'setLoadingToken', payload: false });
    dispatch({ type: 'setOptionToken', payload: 1 });
    dispatch({
      type: 'setDialog',
      payload: {
        visible: false,
        title: '',
        message: '',
        type: '',
      },
    });
  };
};

export const setLayout = payload => {
  return dispatch => {
    dispatch({ type: 'setLayout', payload });
  };
};

export const resetAccount = () => {
  return dispatch => {
    dispatch({ type: 'resetAccount' });
  };
};
