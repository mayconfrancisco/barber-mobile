import React from 'react';
import {Text} from 'react-native';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';

import {Container} from './styles';

export default function Profile() {
  return (
    <Container>
      <Text>Profile</Text>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon
      type="MaterialIcons"
      name="person"
      style={{fontSize: 20, color: tintColor}}
    />
  ),
};

// TODO - para pegar a props dentro do navigationOptions tem que fazer diferente - pesquisar e refatorar
Profile.propTypes = {
  tintColor: PropTypes.string.isRequired,
};