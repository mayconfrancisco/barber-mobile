import React from 'react';
import {useSelector} from 'react-redux';

import createRouter from './routes';

/**
 * Criamos esse arquivo com as rotas fora do index.js por conta da necessidade
 * de acessar a o redux para saber se o usuario esta locado e definir a rota baseado nisso.
 *
 * Nao dava para usar no index pq o provider injeta o contexto de redux la, por esse motivo
 * nao teriamos acesso ao estado ainda
 */
export default function App() {
  // Como estamos ouvindo o signed do redux a navegacao sera automatica para o dashboard
  // sempre que logarmos - ao atualizar o signed as rotas sao recriadas
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes />;
}
