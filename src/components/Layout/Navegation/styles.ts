import styled from 'styled-components';

export const Container = styled.div`
  font-size: 15px;
  font-weight: 700;
  text-overflow: ellipsis;
  padding: 0;

  > ul {
    list-style: none;
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid var(--outline);
    overflow: hidden;
  text-overflow: ellipsis;
  height: 54px;

    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      padding: 15px;
      cursor: pointer;
      transition: 100ms ease-in;

      &:hover{
        background: var(--twitter-dark-hover);
        color: var(--twitter);
      }
    }
  }

  .activated {
    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);
  }
`;
