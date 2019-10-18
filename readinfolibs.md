npx react-native init nomeDoProjeto

editorconfig

deletar o .eslintrc.js
yarn add eslint -D
yarn eslint --init
deletar package-lock.json
yarn

yarn add -D prettier eslint-config-prettier eslint-plugin-prettier babel-eslint <br />
configurar o arquivo .eslintrc.js: <br />
  add no extends 'prettier', 'prettier/react'
  add parser:'babel-eslint'
  add 'prettier' nos plugins
  add rules abaixo:
  rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extensions': [
        'warn',
        {
          extensions: ['.jsx', '.js']
        }
      ],
      'import/prefer-default-export': 'off'
    },

criar o arquivo .prettierrc com o singlequote e trailingcomma


yarn add -D babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import <br/>
configurar o babel.config.js - add plugins 'babel-plugin-root-import' <br/>
plugins: [
  [
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ],
],

configurar no arquivo eslintrc.js o settings <br/>
settings: {
  'import/resolver': {
    'babel-plugin-root-import': {
      rootPathSuffix: 'src'
    }
  }
}

criar/configurar jsconfig.json <br/>
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}

yarn add styles-component

yarn add prop-types

yarn add react-navigation react-native-gesture-handler react-native-reanimated
//lidam com navegacao e possui componentes específicos para cada plataforma (android/ios), gestos de navegacao e animacoes na navegacao, nesta ordem
ANDROID configurar o gesture handler no MainActivity.java
IOS- ReactNative >= 0.60 - acessar a pasta ios e rodar o pod install para instalar as dependencias nativas do gesture handler e reanimated

criar arquivo de src/routes.js

yarn add react-navigation-stack //caso use o stack navigator - apartir do react-navigation 4 os navigators migraram para um novo repo
yarn add react-navigation-tabs //caso use o tabNavigator

Tipos de navegacao por rotas - Para mais detalhes consulte documentacao
createStackNavigator - cria uma pilha de telas e permite voltar para anterior
createSwitchNavigator - navega de uma tela para outra eliminando a anterior - Ex login para tela inicial
createBottomTabNavigator - criar abas na parte inferior
createMaterialTopTabNavigator - cria abas na parte superior - stileguide android
createDrawerNavigator - cria "menu/aba lateral" - no android eh preciso configurar mais coisas - consulta documentacao

yarn add jetifier -D //faz uma varredura nas dependencias instaladas e faz um fix nelas para dar suporte ao Android X - ate a data deste commit a gesture-handler ainda nao dava suporte ao Android X - por isso a necessidade do jefity <br/>
yarn run jetify // para rodar o fix - deve rodar isso a cada add de libs - podemos automatizar criando um script no packgage.json para executar sempre que yarn add ou npm install: <br/>
"postinstall": "jetify"

yarn add react-native-linear-gradient <br />
ReactNative >= 0.60 necessario pod install - para tal eh preciso o cocoa-pods - instalar pelos gems<br/>
ReactNative <= 0.60 react-native link react-native-linear-gradient <br/>
caso de pau - run-ios novamente ou rebuild no xcode caso esteja rodando no aparelho físico

yarn add react-native-vector-icons //lib de icones para o reactnative
react-native link react-native-vector-icons
AFIM DE EVITAR OS PROBLEMAS DE DUPLICACAO DE FONTES E TER QUE IR NO XCODE REMOVER OS DUPLICADOS USE O NATIVE-BASE
yarn add native-base
react-native link
e usa assim:
import { Icon } from 'native-base';
<Icon type="MaterialIcons" name="add" style={{ fontSize: 20, color: '#fff' }} />




yarn add reactotron-react-native reactotron-redux reactotron-redux-saga
criar o src/config/reactotron.js com as config - --DEV-- configurar no .eslintrc.js no globals/readonly


yarn add react-redux redux redux-saga redux-persist immer

redux-persist > = v6 <br/>
import AsyncStorage from '@react-native-community/async-storage';  <br/>
const persistConfig = {
  //...
  storage: AsyncStorage,
}

yarn add @react-native-community/async-storage
IOS acesse a pasta ios e rode o pod install
ANDROID só rodar novamente react-native run-android


yarn add axios <br/>
// ANDROID <br/>
  // 10.0.2.2 - para o emulador do android studio <br/>
  // 10.0.3.2 - para o emulador genimotion <br/>
  // IP da maquina - para dispositivos físicos <br/>
// iOS - funciona no localhost


yarn add @react-native-community/datetimepicker <br />
IOS - pod install <br />
ANDROID - add linhas ao gradle e import no MainApplication.java - veja mais em https://github.com/react-native-community/react-native-datetimepicker





@@@@@@@@@@@@@@@@@@



yarn add react-native-webview
