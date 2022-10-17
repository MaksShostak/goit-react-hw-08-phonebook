import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: black;
  padding: 5px 20px;

  font-weight: 700;
  transition: all 200ms ease-out;
  &.active {
    color: crimson;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: rgb(131, 5, 30);
  }
`;
export const Navigate = styled.nav`
  display: flex;
  gap: 40px;
  justify-content: center;
`;
