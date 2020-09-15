import styled, { css } from 'styled-components';
import { AiOutlineTwitter, AiOutlineHome, AiOutlineBell, AiOutlineMail } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { RiQuillPenFill, RiLogoutBoxRLine } from 'react-icons/ri';


const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const Container = styled.div`
  display: none;
  padding-top: 10px;

  @media(min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    max-height: 100vh;
    overflow-y: auto;
    padding: 9px 19px 20px;
  }

  ul li {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 8.25px 15px;
    margin-bottom: 15px;
    outline: 0;
    cursor: pointer;
    border-radius: 50px;
    transition: 100ms ease-in;

    > span {
      display: none;

      @media(min-width: 1280px) {
        display: inline;
        margin-left: 19px;
        font-weight: bold;
        font-size: 19px;
      }
    }

    &:last-child {
      margin: auto;
      background: var(--twitter);
      display: flex;
      justify-content: center;
      border-radius: 50px;

      @media(max-width: 1279px) {
        width: 40px;
        height: 40px;
      }
    }
    &:hover{
      background: var(--twitter-dark-hover);
    }

    &:hover,
    &.active {
        svg, span {
          color: var(--twitter);
          fill: var(--twitter);
        }
    }

    &.tweetar {
      margin-top: 35px;
      padding-top: 15px;
      padding-bottom: 15px;
      
      &:hover {
        background: var(--twitter-light-hover);
      }
      span {
        margin-left: 0px;
        color:var(--white);
        font-size: 15px;
      }
      @media(min-width: 1280px) {
        svg {
          display: none;
        }
      }
    }

  }

`;

export const TopSide = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  
  @media(min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const BottomSide = styled.div`

  > ul {
    display: flex;
    justify-content: center;
    
     
    &:hover {
      background: var(--twitter-dark-hover);
      border-radius: 50px;
      li, span, svg {
        color: var(--twitter);
        fill: var(--twitter);
      }

      @media(max-width: 1280px) {
        background: transparent;
        border-radius: 0;
      }
    }
  }
  > ul li {
    margin: 0;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: normal;
    color: var(--gray);align-items: flex-start;

    @media(max-width: 1280px) {
      padding: 0;
    }

    span {
      font-size: 14px;
      margin-left: 0px;
    }

    @media(max-width: 1280px) {
      display: none
    }
    :first-child {
      padding-right: 0;
      display: inline
    }
    :last-child {
      background: transparent;
      svg {
        width: 25px;
        height: 25px;
      }
      @media(max-width: 1280px) {
      display: none
    }
    }

    &:hover {
      background: transparent;
    }
  }

  img {
    width: 39px;
    height: 39px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--twitter);
  }
`;

export const LogoIcon = styled(AiOutlineTwitter)`
  ${iconCSS}
  width: 41px;
  height: 41px;
  margin-bottom: 20px;
  @media(min-width: 1280px){
    margin-left: 15px;
  }
`;

export const HomeIcon = styled(AiOutlineHome)`
 ${iconCSS}
`;

export const BellIcon = styled(AiOutlineBell)`
 ${iconCSS}
`;

export const EmailIcon = styled(AiOutlineMail)`
 ${iconCSS}
`;

export const FavoriteIcon = styled(BsBookmark)`
 ${iconCSS}
`;

export const ProfileIcon = styled(FaUser)`
 ${iconCSS}
`;
export const TweetIcon = styled(RiQuillPenFill)``;

export const LogoutIcon = styled(RiLogoutBoxRLine)``;

