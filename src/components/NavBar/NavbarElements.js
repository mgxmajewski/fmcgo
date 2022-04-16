import styled from "styled-components";
import {Link as LinkR} from 'gatsby';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
  --nav-font-size: 1.2vw;
  background: transparent;
  height: 20vw;
  //margin-top: -80px;
  display: grid;
  align-items: center;
  justify-items: end;
  font-size: var(--nav-font-size);
  position: sticky;
  width: 92vw;
  top: 0;
  z-index: 10;

  @media screen and (min-width: 900px) {
    height: auto;
    transition: .8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: grid;
  justify-items: right;
  //justify-self: right;
  height: 16vw;
  z-index: 1;
  width: 100%;
  //padding: 0 8vw;

  @media screen and (min-width: 900px) {
    width: 92vw;
    height: auto;
    transition: .8s all ease;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: grid;
    position: absolute;
    justify-self: right;
    //float: right;
    top: 10.5vw;
    //right: 0;
    //transform: translate(-50%, 60%);
    //font-size: 1.8rem;
    cursor: pointer;
    color: ${({isbright}) => isbright === 'true' ? 'white' : 'black'};
  }
`

export const NavMenu = styled.ul`
  display: grid;
  grid-column-gap: 3vw;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const NavItem = styled.li`
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-template-rows: 1fr;
  grid-column-gap: 2vw;
  //height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: ${({isbright}) => isbright === 'true' ? 'white' : 'black'};
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  &.active {
    font-weight: 900;
    background: linear-gradient(90deg, rgba(74, 90, 211, 1) 0%, rgba(212, 49, 73, 1) 50%, rgba(99, 14, 105, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const NavLangaugeToggle = styled(LinkR)`
  align-self: end;
  background: transparent;
  font-size: calc(var(--nav-font-size) * .8);
  white-space: nowrap;
  color: ${({isbright}) => isbright === 'true' ? 'white' : 'black'};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
`

export const LangPL = styled.span`
  text-decoration: ${({currentLang}) => currentLang === 'pl' ? 'underline' : 'none'};
  font-weight: ${({currentLang}) => currentLang === 'pl' ? '900' : '300'};
`

export const LangENG = styled.span`
  text-decoration: ${({currentLang}) => currentLang === 'eng' ? 'underline' : 'none'};
  font-weight: ${({currentLang}) => currentLang === 'eng' ? '900' : '300'};
`