import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
  USER_INFORMATION,
  USER_SALDO,
  GET_USER,
  GET_USER_ADDRESS,
  GET_USER_DEPOSIT_INFO
} from '../types/user_types'

import axios from 'axios'
const URI = 'https://api-bit-capital.atvbk.me'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const ConsumerCredentials = (username, password, token) => {
  const data = {
    grant_type: 'password',
    username,
    password
  }

  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST })
    try {
      const res = await axios.post('https://api.bitcapital.atvbk.me/oauth/token', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
      await AsyncStorage.setItem('user_id', res.data.user_id)
    } catch (err) {
      alert('Erro em suas credenciais. Por favor, tente novamente.')
      dispatch({ type: LOGIN_FAIL, payload: error })
    }
  }
}

export const handleLogout = () => {
  return async dispatch => {
    await AsyncStorage.clear()
    dispatch({ type: LOGOUT_USER })
  }
}

export const GetWalletsById = async () => {
  try {
    const walletsId = await AsyncStorage.getItem('wallet_id')
    const tokenApi = await AsyncStorage.getItem('tokenApi')

    const { data } = await axios.get(`https://api.bitcapital.atvbk.me/?endpoint=/wallets/${walletsId}&method=GET`, {
      headers: {
        Authorization: `Bearer ${tokenApi}`
      }
    })

    return data
  } catch (err) {
    console.log(err)
    return false
  }
}

export const GetUserById = async () => {
  try {
    const userId = await AsyncStorage.getItem('user_id')
    const tokenApi = await AsyncStorage.getItem('tokenApi')
    const { data } = await axios.get(`https://api.bitcapital.atvbk.me/?endpoint=/users/${userId}&method=GET`, {
      headers: {
        Authorization: `Bearer ${tokenApi}`
      }
    })
    await AsyncStorage.setItem('wallet_id', data.wallets[0].id)
    return data
  } catch (err) {
    console.log(err)
    return false
  }
}

export const userInformations = name => {
  return async dispatch => {
    dispatch({ type: USER_INFORMATION, payload: name })
  }
}

export const userSaldo = saldo => {
  return async dispatch => {
    dispatch({ type: USER_SALDO, payload: saldo })
  }
}

export const getUserInformation = user => {
  return async dispatch => {
    dispatch({ type: GET_USER, payload: user })
  }
}

export const getUserAddress = address => {
  return async dispatch => {
    dispatch({ type: GET_USER_ADDRESS, payload: address })
  }
}

export const GetWalletsDepositInfo = async () => {
  const data = {}
  try {
    const walletsId = await AsyncStorage.getItem('wallet_id')
    const tokenApi = await AsyncStorage.getItem('tokenApi')

    const { data } = await axios.get(
      `https://api.bitcapital.atvbk.me/?endpoint=/wallets/${walletsId}/depositInfo&method=GET`,
      {
        headers: {
          Authorization: `Bearer ${tokenApi}`
        }
      }
    )

    return data

    // const response = await fetch(`https://api.bit.capital.atvbk.me/?endpoint=/wallets/${walletsId}/depositInfo&method=GET`, {
    //   method:'get',
    //   headers: new Headers({
    //     'Authorization': 'Bearer ' + tokenApi,
    //   })
    // })
    // alert("DEPOIS DA CHAMADA")
    // const movies = await response.json();

    // return movies;
  } catch (error) {
    console.log(error)
  }
}

export const GetWalletInformation = depositInfo => {
  return async dispatch => {
    dispatch({ type: GET_USER_DEPOSIT_INFO, payload: depositInfo })
  }
}

// export const GetWalletsDepositInfo = () => {

//   const URI = 'api-bit-capital.atvbk.me/?endpoint=/wallets/1c6b990d-6b84-47fd-bfe3-d9aa46f74a17/depositInfo&method=GET'
//   const requestInfo = {
//     method: 'GET',
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
// };

//   fetch(URI, requestInfo).then(response => alert("OK")).then(() => alert())

// }
