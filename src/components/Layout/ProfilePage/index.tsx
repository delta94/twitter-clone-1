import React from 'react';
import Navegation from './../Navegation';
import Tweet from './../Tweet';
import AvatarImage from './../../../images/profile.jpg';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CalendarIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img src={AvatarImage} alt="" />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton >Editar Perfil</EditButton>

        <h1>Felipe Mota</h1>
        <h2>@felipemotabr</h2>

        <p>Fazendo mágica</p>

        <ul>
          <li>
            <LocationIcon />
            Manaus, Brasil
          </li>
          <li>
            <CalendarIcon />
            Ingressou em agosto de 2009
          </li>
        </ul>

        <Followage>
          <span>
            <strong>206 </strong>
            Seguindo
          </span>
          <span>
            <strong>509 </strong>
            Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Navegation />

      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />



    </Container>
  );
}

export default ProfilePage;