export const setBillet = payload => {
  return dispatch => {
    dispatch({ type: "setBillet", payload });
  };
};

export const clearBillet = () => {
  const payload = {
    codigoBarras: "",
    codigoInput: "",
    linhaDigitavel: "",
    mensagem: "",
    sucesso: false,
    tipoBoleto: "",
    tipoCodigoInput: "",
    valor: 0,
    vencimento: "",
  };
  return dispatch => {
    dispatch({ type: "setBillet", payload });
  };
};
