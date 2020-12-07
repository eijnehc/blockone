import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.div`
  box-sizing: border-box;
  margin: 0px;
  height: 50px;
  width: 100%;
  background-color: #fff;
  position: relative;
  border-bottom: 1px solid #efefef;
`;

export const NavLinkActive = styled(NavLink)`
  float: left;
  color: #4c4d4d;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    color: #2dbe60;
    transition: all 0.2s ease;
  }
`;
