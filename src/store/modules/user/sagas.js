import {Alert} from 'react-native';
import {all, takeLatest, call, put} from 'redux-saga/effects';

import api from '~/services/api';

import {updateProfileSuccess, updateProfileFailure} from './actions';

export function* updateProfile({payload}) {
  try {
    const {name, email, ...rest} = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? {...rest} : {}),
    };

    const response = yield call(api.put, '/users', profile);

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Erro ao atualizar perfil!',
      'Erro ao atualizar perfil, verifique seus dados e o acesso a internet e tente novamente!',
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
