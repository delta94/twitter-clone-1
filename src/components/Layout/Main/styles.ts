import styled, { css } from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BiBell, BiEnvelope } from 'react-icons/bi';

const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: var(--gray);
  &:hover,
  &.active {
    fill: var(--twitter)!important;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  background: var(--primary);
  display: flex;
  align-items: center;
  text-align: left;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
  z-index: 2;

  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover)
    }
  }
`;

export const BackIcon = styled(HiArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;
  display: block;
  flex-direction: column;

  > strong {
    font-size: 19px;  display: block;
  }
  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);
  display:flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none
  }
`;

export const HomeIcon = styled(AiOutlineHome)`
  ${iconCSS}
`;

export const SearchIcon = styled(AiOutlineSearch)`
  ${iconCSS}
`;

export const BellIcon = styled(BiBell)`
  ${iconCSS}
`;

export const EmailIcon = styled(BiEnvelope)`
  ${iconCSS}
`;

