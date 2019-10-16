import storage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'goBarber',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers,
  );

  return persistedReducer;
};
