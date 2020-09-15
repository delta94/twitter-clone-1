import React from 'react';

import { Container } from './styles';

const Navegation: React.FC = () => {
  return (
    <Container>
      <ul>
        <li className="activated">Tweets</li>
        <li>Tweets e respostas</li>
        <li>Mídia</li>
        <li>Curtidas</li>
      </ul>
    </Container>
  );
}

export default Navegation;