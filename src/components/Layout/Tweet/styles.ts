import styled, { css } from 'styled-components';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const iconCSS = css`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: var(--gray);
  margin-right: 5px;
  border-radius: 50%;

`

export const Container = styled.div`
    display: flex;
    align-items: top;
    padding: 15px;
    transition: opacity 0.3s ease-out 0s;
    border-top: 1px solid var(--outline);
    transition: 200ms ease-in;

    &:hover{
      background: var(--twitter-dark-hover);
      cursor: pointer;
    }
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  background: var(--twitter);
  margin-right: 10px;
  flex-shrink: 0;
  overflow: hidden;

  > img {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;

  > ul {
    margin-top: 12px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;

    @media (min-width: 330px) {
    width: 83%;
  }
    
    > li {
      display: flex;
      justify-content: center;
      cursor: pointer;

      &:hover:nth-child(1),
      &:hover:nth-child(4), 
      &:hover:nth-child(5) {
          &,
          > svg path {
            color: var(--twitter);
            fill: var(--twitter);
          }
        }

        &:hover:nth-child(2) {
          &,
          > svg path {
            color: var(--retweet);
            fill: var(--retweet);
          }
        }
        &:hover:nth-child(3) {
          &,
          > svg path {
            color: var(--like);
            fill: var(--like);
          }
        }
    }
  }

  
`;

export const Header = styled.div`
  display: flex;
  align-items: top;
  font-weight: 400;
  font-size: 15px;
  color: var(--gray);
  margin-bottom: 2px;
  white-space: nowrap;

  > strong {
    font-weight: bold;
    margin-right: 5px;
    color: var(--white);
  }

  &:hover span {
    text-decoration: underline
  }

  
`;


export const Retweet = styled.div`
`;

export const Picture = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  background: var(--outline);
  border-radius: 14px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const CommentIcon = styled(FaRegComment)`
  ${iconCSS}
`;

export const RetweetIcon = styled(FaRetweet)`
  ${iconCSS}
`;

export const LikeIcon = styled(AiOutlineHeart)`
  ${iconCSS}
`;
