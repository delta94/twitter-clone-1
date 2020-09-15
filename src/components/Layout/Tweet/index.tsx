import React from 'react';
import AvatarImage from './../../../images/profile.jpg';


import { Container, Avatar, Content, Retweet, Header, Picture, CommentIcon, RetweetIcon, LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <img src={AvatarImage} alt="" />
      </Avatar>
      <Content>
        <Retweet />
        <Header>
          <strong><span>Felipe Mota</span></strong> @felipemotabr · 14 de abr
        </Header>
        <p>Dança do passarinho uheue </p>
        <Picture />
        <ul>
          <li><CommentIcon /> 10</li>
          <li><RetweetIcon /> 30</li>
          <li><LikeIcon /> 1,1 mil</li>
        </ul>
      </Content>

    </Container>
  );
}

export default Tweet;