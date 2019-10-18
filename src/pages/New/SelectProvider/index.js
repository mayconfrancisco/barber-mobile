import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';
import {Container, ProvidersList, Provider, Avatar, Name} from './styles';

export default function SelectProvider({navigation}) {
  const [providers, setProviders] = useState();

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('/providers');
      setProviders(response.data);
    }

    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({item: provider}) => (
            <Provider
              onPress={() => navigation.navigate('SelectDateTime', {provider})}>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatar/50/${provider.name}`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
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

SelectProvider.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
