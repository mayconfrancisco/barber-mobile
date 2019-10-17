import React from 'react';
import {Text} from 'react-native';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';

import {Container} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Text>Dashboard</Text>
    </Container>
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
