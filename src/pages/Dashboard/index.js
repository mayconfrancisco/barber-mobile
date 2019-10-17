import React from 'react';
import {Text} from 'react-native';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import {Container} from './styles';

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Text>Dashboard</Text>
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({tintColor}) => (
    <Icon
      type="MaterialIcons"
      name="event"
      style={{fontSize: 20, color: tintColor}}
    />
  ),
};

Dashboard.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
