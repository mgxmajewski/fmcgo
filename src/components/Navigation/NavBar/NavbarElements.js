import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
  --nav-font-size: 1em;
  background: transparent;
  height: 20vw;
  //margin-top: -80px;
  display: grid;
  align-items: center;
  justify-items: end;
  position: sticky;
  width: 92vw;
  top: 0;
  z-index: 999999;

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
  z-index: 999999;
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
    z-index: 999999;
    display: grid;
    position: absolute;
    justify-self: right;
    //float: right;
    top: 10.5vw;
    //right: 0;
    //transform: translate(-50%, 60%);
    //font-size: 1.8rem;
    cursor: pointer;
    --hamb-color: ${({isbright}) => isbright === 'true' ? 'white' : 'black'};
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
  font-size: var(--nav-font-size);
  display: grid;
  grid-template-columns: 1.8em 4em 2em 3.4em 4.5em 3em;
  grid-template-rows: 1fr;
  grid-column-gap: 2vw;
  //height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: ${({isbright}) => isbright === 'true' ? 'white' : 'black'};
  display: inline-flex;
  align-items: center;
  justify-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  &.active {
    font-weight: 900;
    background: linear-gradient(90deg, rgba(74, 90, 211, 1) 0%, rgba(212, 49, 73, 1) 50%, rgba(99, 14, 105, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 #00000000;
  }

  //&.active::before {
  //  display: flex;
  //  content: attr(title);
  //  font-weight: bold;
  //  height: 0;
  //  overflow: hidden;
  //  visibility: hidden;
  //}
  
`