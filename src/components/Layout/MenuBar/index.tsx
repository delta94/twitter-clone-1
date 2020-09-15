import React from 'react';
import AvatarImage from './../../../images/profile.jpg';

import { Container, TopSide, LogoIcon, HomeIcon, BellIcon, EmailIcon, FavoriteIcon, ProfileIcon, TweetIcon, BottomSide, LogoutIcon } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <LogoIcon />
        <ul>
          <li>
            <HomeIcon />
            <span>Página Inicial</span>
          </li>
          <li>
            <BellIcon />
            <span>Notificações</span>
          </li>
          <li>
            <EmailIcon />
            <span>Mensagens</span>
          </li>
          <li>
            <FavoriteIcon />
            <span>Itens Salvos</span>
          </li>
          <li className="active">
            <ProfileIcon />
            <span>Perfil</span>
          </li>
          <li className="tweetar">
            <TweetIcon /><span>Tweetar</span>
          </li>
        </ul>
      </TopSide>

      <BottomSide>
        <ul>
          <li>
            <img src={AvatarImage} alt="" />
          </li>
          <li><span>Felipe Mota</span>@felipemotabr</li>
          <li>
            <LogoutIcon />
          </li>
        </ul>
      </BottomSide>
    </Container>
  );
}

export default MenuBar;