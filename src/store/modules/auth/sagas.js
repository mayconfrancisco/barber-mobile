import {Alert} from 'react-native';
import {takeLatest, put, call, all} from 'redux-saga/effects';

import api from '~/services/api';

import {signInSuccess, signFailure, signUpSuccess} from './actions';

/**
 *
 * SignIN
 *
 */
export function* signIn({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const {token, user} = response.data;

    if (user.provider) {
      Alert.alert(
        'Erro no login',
        'Usuário não pode ser prestador de serviços',
      );
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados',
    );

    yield put(signFailure());
  }
}

/**
 *
 * SignUP
 *
 */
export function* signUp({payload}) {
  try {
    const {name, email, password} = payload;

    yield call(api.post, '/users', {
      name,
      email,
      password,
    });

    yield put(signUpSuccess());

    // history.push('/');
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados',
    );
    yield put(signFailure());
  }
}

function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken), // ouvindo a action do redux-persist para add o token no axios
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
