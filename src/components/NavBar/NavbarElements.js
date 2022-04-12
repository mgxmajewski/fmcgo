import styled from "styled-components";
import {Link as LinkR} from 'gatsby';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  //margin-top: -80px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: .8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: right;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  //max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  //margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  display: flex;
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  //color: black;
  color: ${({isbright}) => isbright === 'true' ? 'white' : 'black'};
  display: flex;
  //font-weight: 900;
  //flex-direction: row;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active {
    font-weight: 900;
    background: linear-gradient(90deg, rgba(74, 90, 211, 1) 0%, rgba(212, 49, 73, 1) 50%, rgba(99, 14, 105, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: cornflowerblue;
  white-space: nowrap;
  padding: 8px 18px;
  color: darkblue;
  font-size: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-out;
    background: coral;
    color: crimson;
  }
`