import styled, { css } from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai'

const Card = css`
  background: var(--secondary);
  margin-top: 15px;
  border-radius: 14px;
  overflow: hidden;
`;

export const Container = styled.div`
  @media (max-width: 999px) {
    display: none
  }
  
  padding-right: 20px;
  width: min (399px, 10%);
  margin-left: 24px;


  h1 {
    font-weight: bold;
    font-size: 19px;
    color: var(--white);
    border-bottom: 1px solid var(--outline);
    padding-bottom: 10px;
    padding: 13px 16px;
  }

  .avatar {
    display: flex;
  }

  footer {
    font-size: 12px;
    color: var(--gray);
    line-height: 30px;
    padding-top: 20px;
    padding-left: 10px;
    
    span {
      margin-right: 10px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const SearchWrapper = styled.div`
    position: sticky;
    z-index: 2;
    top: 0;
    background: var(--primary);
    height: 64px;

  > input {
    outline: 0;
    background: var(--search);
    font-size: 14px;
    color: var(--gray);
    padding: 12px 30px 12px 50px;
    width: 100%;
    border-radius: 30px;
    border: 1px solid var(--outline);
    position: absolute;
    left: 0;
    top: 8px;

    &:focus {
      border: 1px solid var(--twitter);
    }
  }
  > svg {
    position: relative;
    top: 18px;
    left: 17px;
    z-index: 1;
    width: 25px;
    height:25px;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)``;

export const Suggestions = styled.div`
  ${Card}
  
  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 16px;
    cursor: pointer;
     
    strong {
      font-weight: 700;
      display: block;
    }
    span {
      color: var(--gray);
    }

    button {
      border: 1px solid var(--twitter);
      color: var(--twitter);
      padding: 6px 17px;
      border-radius: 14px;
      font-weight: 700;
    }

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }

`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px; 
  overflow: hidden;
  border-radius: 50%;
  background: var(--twitter);
  margin-right: 10px;

  img {
    max-width: 100%;
  }
`;

export const TrendsTopics = styled.div`
  ${Card}

  display: flex;
  flex-direction: column;
  
  ul li {
    padding: 13px 16px;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }

    span {
      font-size: 13px;
      line-height: 19px;
      display: block;
      color: var(--gray)
    }

    strong {
      font-size: 15px;
    }
  }
`;
