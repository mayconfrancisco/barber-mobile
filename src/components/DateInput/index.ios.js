import React, {useState, useMemo} from 'react';
import {DatePickerIOS} from 'react-native';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {Icon} from 'native-base';

import {Container, DateButton, DateText, Picker} from './styles';

export default function DateInput({date, onChange}) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [date],
  );

  return (
    <Container>
      <DateButton
        onPress={() => {
          setOpened(!opened);
        }}>
        <Icon
          type="MaterialIcons"
          name="event"
          style={{color: '#fff', fontSize: 20}}
        />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <Picker>
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            locale="pt"
            mode="date"
          />
        </Picker>
      )}
    </Container>
  );
}
