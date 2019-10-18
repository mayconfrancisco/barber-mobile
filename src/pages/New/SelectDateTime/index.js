import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';
import {Container} from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  console.tron.log('date', date);

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({navigation}) => ({
  title: 'Selecione um horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon
        type="MaterialIcons"
        name="chevron-left"
        style={{fontSize: 20, color: '#fff'}}
      />
    </TouchableOpacity>
  ),
});
