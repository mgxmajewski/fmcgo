import styled from "styled-components";
import {Link as LinkR} from "gatsby";

export const NavLangaugeToggle = styled(LinkR)`
  align-self: center;
  justify-self: center;
  background: transparent;
  white-space: nowrap;
  color: white;
  //color: ${({isbright}) => isbright === 'true' ? 'white' : 'black'};
  outline: none;
  border: none;
  //cursor: pointer;
  cursor: default;
  text-decoration: none;

  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  //transition: .2s ease-in-out;
  width: 90%;
  border-top: 2px solid white;
  padding-top: 8vw;
  margin-top: 4vw;
  
  @media screen and (min-width: 900px) {
    font-size: calc(var(--nav-font-size) * .8);
    padding-top: 0;
    margin-top: 0;
    border-top: none;
    width: 100%;
  }
`

export const MobileNavLinkG = styled(LinkR)`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding-left: .2rem;
  padding-right: .2rem;
  text-decoration: none;
  list-style: none;
  transition: .2s ease-in-out;
  color: #7b7b7b;
  cursor: pointer;

  &.active {
    color: white;
    font-weight: 900;
    text-decoration: underline;
  }

  &:hover {
    font-weight: 900;
    color: white;
    transition: 0.2s ease-in-out;
  }
`

export const NavLangaugeToggleMobile = styled(NavLangaugeToggle)`
  color: white;
`