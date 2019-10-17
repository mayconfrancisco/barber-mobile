import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function SelectProvider() {
  return <Background />;
}

// headerLeft - function que deve retornar um componente que sera renderizado no lado esquerdo do header do StackNavigator
SelectProvider.navigationOptions = ({navigation}) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <Icon
        type="MaterialIcons"
        name="chevron-left"
        style={{fontSize: 20, color: '#fff'}}
      />
    </TouchableOpacity>
  ),
});
