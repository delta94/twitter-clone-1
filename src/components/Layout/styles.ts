import styled from 'styled-components';

export const Container = styled.div`
  background: --var(primary);
`;
export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  margin: auto;

  @media (max-width: 500px) {
    padding-bottom: 49px;
  }
`;