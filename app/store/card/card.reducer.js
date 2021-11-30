const initialState = {
  cards: {
    physical: {
      key: 1,
      cardId: '',
      companyId: '',
      taxId: '',
      name: '',
      typeName: 'Cartão Físico',
      type: '1',
      number: '',
      cvv: '',
      date: '',
      dueDate: '',
      validMonth: '',
      validYear: '',
      blocked: true,
      active: false,
      limitUsed: 0,
      limitBlocked: 0,
      limit: 0,
    },
    virtual: {
      key: 2,
      cardId: '',
      companyId: '',
      taxId: '',
      name: '',
      typeName: 'Cartão Virtual',
      type: '2',
      number: '',
      cvv: '',
      date: '',
      dueDate: '',
      validMonth: '',
      validYear: '',
      blocked: true,
      active: false,
      limitUsed: 0,
      limitBlocked: 0,
      limit: 0,
    },
  },
  debts: {
    physical: {
      moviments: [
        {
          id: 1,
          description: 'Teste de transacao',
          date: '2021-11-18',
          amount: 12990,
        },
        {
          id: 2,
          description: 'Teste de transacao',
          date: '2021-11-18',
          amount: 12990,
        },
        {
          id: 3,
          description: 'Teste de transacao',
          date: '2021-11-18',
          amount: 12990,
        },
        {
          id: 4,
          description: 'Teste de transacao',
          date: '2021-11-18',
          amount: 12990,
        },
        {
          id: 5,
          description: 'Teste de transacao',
          date: '2021-11-18',
          amount: 12990,
        },
      ],
    },
    virtual: {
      moviments: [],
    },
  },
};

export const card = (state = initialState, action) => {
  switch (action.type) {
    case 'setCards':
      return { ...state, cards: action.payload };
    case 'setDebts':
      return { ...state, debts: action.payload };
    case 'resetCard':
      return initialState;
    default:
      return state;
  }
};
