import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'gatsby';
import {Link as LinkS} from 'react-scroll';

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: .3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')}
`

export const CloseIcon = styled(FaTimes)`
  color: white;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SideBarWrapper = styled.div`
  color: white;
`

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  //overwrite default
  padding-inline-start: 0;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

export const SideBarLink = styled(LinkS)`
  //left: -10px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: .2s ease-in-out;
  color: white;
  cursor: pointer;

  &.active{
    font-weight: 900;
    background: linear-gradient(90deg, rgba(74, 90, 211, 1) 0%, rgba(212, 49, 73, 1) 50%, rgba(99, 14, 105, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    //transition: 0.2s ease-in-out;
  }
  
  &:hover {
    font-weight: 900;
    color: grey;
    //-webkit-background-clip: text;
    //-webkit-text-fill-color: transparent;
    transition: 0.2s ease-in-out;
  }
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const SideBarRoute = styled(LinkR)`
  border-radius: 50px;
  background: chocolate;
  white-space: nowrap;
  padding: 16px 64px;
  //padding: 8px 32px;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: crimson;
  }
`