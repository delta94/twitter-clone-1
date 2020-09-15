import React from 'react';
import StickyBox from 'react-sticky-box';

import { Container, SearchWrapper, SearchIcon, Suggestions, Avatar, TrendsTopics } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchIcon />
        <input placeholder={'Buscar no Twitter'} />
      </SearchWrapper>

      <StickyBox offsetTop={69}>
        <Suggestions>
          <h1>Talvez você curta</h1>
          <ul>
            <li>
              <div className="avatar">
                <Avatar />
                <div className="profile">
                  <strong>{'Felipe Mota'}</strong>
                  <span>@felipemotabr</span>
                </div>
              </div>
              <div className="follow">
                <button>
                  Seguir
                </button>
              </div>
            </li>
            <li>
              <div className="avatar">
                <Avatar />
                <div className="profile">
                  <strong>{'Felipe Mota'}</strong>
                  <span>@felipemotabr</span>
                </div>
              </div>
              <div className="follow">
                <button>
                  Seguir
                </button>
              </div>
            </li>
            <li>
              <div className="avatar">
                <Avatar />
                <div className="profile">
                  <strong>{'Felipe Mota'}</strong>
                  <span>@felipemotabr</span>
                </div>
              </div>
              <div className="follow">
                <button>
                  Seguir
                </button>
              </div>
            </li>
          </ul>
        </Suggestions>

        <TrendsTopics>
          <h1>O que está acontecendo</h1>
          <ul>
            <li>
              <span>Assuntos do momemnto em Brasil</span>
              <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit</strong>
            </li>
            <li>
              <span>Assuntos do momemnto em Brasil</span>
              <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit</strong>
            </li>
            <li>
              <span>Assuntos do momemnto em Brasil</span>
              <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit</strong>
            </li>
            <li>
              <span>Assuntos do momemnto em Brasil</span>
              <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit</strong>
            </li>
            <li>
              <span>Assuntos do momemnto em Brasil</span>
              <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit</strong>
            </li>
            <li>
              <span>Assuntos do momemnto em Brasil</span>
              <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit</strong>
            </li>
            <li>
              <span>Assuntos do momemnto em Brasil</span>
              <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit</strong>
            </li>
          </ul>
        </TrendsTopics>

        <footer>
          <span>Termos</span>
          <span>Política de Privacidade</span>
          <span>Cookies</span>
          <span>Informações de anúncios</span>
        © 2020 Twitter, Inc.
      </footer>


      </StickyBox>

    </Container>
  );
}

export default Sidebar;