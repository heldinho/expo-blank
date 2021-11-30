
const initialState = {
  layout: {
    old: false,
  },
  project: {
    key: '',
    value: '',
  },
  access_token: {
    key: '',
    value: '',
    islogin: false,
  },
  client: {
    userId: '',
    email: '',
    password: '',
    touchID: false,
    name: '',
    fistName: '',
    lastName: '',
    fullName: '',
    dataAccount: {
      fullName: '',
    },
  },
  keyToken: '',
  optionToken: 1,
  tab: 'login',

  loading: false,
  loadingToken: false,
  error: null,
  saldo: 0,
  address: {},
  depositInfo: {},

  dialog: {
    visible: false,
    title: '',
    message: '',
    type: '',
  },
  timer: true,

  step: 0,
  onboarding: {
    userId: '',
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
  docType: '',
  docRg: '',
  docCnh: '',
  selfie: '',
  plan: '',
  check: {
    term: false,
    policy: false,
  },
  billet: {
    codigoBarras: '',
    codigoInput: '',
    linhaDigitavel: '',
    mensagem: '',
    sucesso: false,
    tipoBoleto: '',
    tipoCodigoInput: '',
    valor: 0,
    vencimento: '',
  },
};

export const account = (state = initialState, action) => {
  switch (action.type) {
    case 'setProject':
      return { ...state, project: action.payload };
    case 'setToken':
      return {
        ...state,
        access_token: { ...state.access_token, ...action.payload },
      };
    case 'setClient':
      return { ...state, client: action.payload };
    case 'setOptionToken':
      return { ...state, optionToken: action.payload };
    case 'setTab':
      return { ...state, tab: action.payload };
    case 'setLoadingToken':
      return { ...state, loadingToken: action.payload };
    case 'setDialog':
      return { ...state, dialog: { ...state.dialog, ...action.payload } };
    case 'setKeyToken':
      return { ...state, keyToken: action.payload };
    case 'setTimer':
      return { ...state, timer: action.payload };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'setOnboarding':
      return {
        ...state,
        onboarding: { ...state.onboarding, ...action.payload },
      };
    case 'resetOnboarding':
      return { ...state, ...action.payload };
    case 'setZip':
      return { ...state, zip: action.payload };
    case 'setNumber':
      return { ...state, number: action.payload };
    case 'setComplement':
      return { ...state, complement: action.payload };
    case 'setAddress':
      return { ...state, address: { ...state.address, ...action.payload } };
    case 'setPhoto':
      return { ...state, [action.payload.name]: action.payload.value };
    case 'setPhotoType':
      return { ...state, photoType: action.payload };
    case 'setDocType':
      return { ...state, docType: action.payload };
    case 'setPlan':
      return { ...state, plan: action.payload };
    case 'setCheck':
      return { ...state, check: { ...state.check, ...action.payload } };

    case 'setBillet':
      return { ...state, billet: { ...state.billet, ...action.payload } };

    case 'setLayout':
      return { ...state, layout: { ...state.layout, ...action.payload } };

    case 'resetAccount':
      return initialState;

    default:
      return state;
  }
};
