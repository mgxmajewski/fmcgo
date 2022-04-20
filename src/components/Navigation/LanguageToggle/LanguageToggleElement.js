import styled from "styled-components";
import {Link as LinkR} from "gatsby";

export const NavLangaugeToggle = styled(LinkR)`
  align-self: center;
  justify-self: center;
  background: transparent;
  white-space: nowrap;
  //color: white;
  color: ${({isbright}) => isbright === 'true' ? 'white' : 'black'};
  outline: none;
  border: none;
  cursor: pointer;
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
  padding-top: 4vw;


  @media screen and (min-width: 900px) {
    font-size: calc(var(--nav-font-size) * .8);
    padding-top: 0;
    border-top: none;
    width: 100%;

  }
`

export const NavLangaugeToggleMobile = styled(NavLangaugeToggle)`
  color: white;
`

export const LangPL = styled.span`
  text-decoration: ${({currentLang}) => currentLang === 'pl' ? 'underline' : 'none'};
  font-weight: ${({currentLang}) => currentLang === 'pl' ? '900' : '300'};
`

export const LangENG = styled.span`
  text-decoration: ${({currentLang}) => currentLang === 'eng' ? 'underline' : 'none'};
  font-weight: ${({currentLang}) => currentLang === 'eng' ? '900' : '300'};
`