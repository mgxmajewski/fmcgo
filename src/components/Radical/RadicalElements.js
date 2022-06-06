import styled, {keyframes} from "styled-components";

export const RadicalSection = styled.section`
  grid-area: radical-section;
  display: grid;
  /*height: 150vw;*/
  background-color: black;
  justify-items: center;
  padding-left: var(--left-padding-mobile);
  grid-template:
            "radical-icons"
            "radical-tagline"
            "radical-copy"
            "radical-drawers";
  grid-template-columns: var(--single-column-width-mobile);
  grid-row-gap: var(--row-gap-mobile);
  grid-template-rows: auto auto auto 30vw;
  padding-top: 4vw;


  @media screen and (min-width: 900px) {
    /*height: 50vw;*/
    padding-top: calc(var(--padding-top-desktop) / 2);
    padding-bottom: var(--padding-bottom-destop);
    padding-left: var(--left-padding-desktop);
    grid-template:
            "radical-icons"
            "radical-tagline"
            "radical-copy"
            "radical-drawers";
    grid-template-columns: var(--single-column-width-desktop);
    grid-row-gap: 2vw;
    /*grid-template-rows: 6vw 8.5vw 10.5vw auto;*/
    grid-template-rows: auto auto auto auto;
    /*grid-column-gap: 3vw;*/
  }
`


export const RadicalIcons = styled.div`
  grid-area: radical-icons;
  width: 100%;
  display: grid;
  grid-template:
            "mouse-go social-icons";
  justify-self: left;


  @media screen and (min-width: 900px) {
    width: var(--main-content-column-width-desktop);
    /*padding-top: 0.4vw;*/
    padding-bottom: 6.5vw;
    margin-top: -2vw;
  }
`


export const RadicalTagline = styled.div`
  grid-area: radical-tagline;
  font-weight: 900;
  justify-self: left;
  align-self: end;
  color: white;
  line-height: 1.05;
  font-size: var(--section-tagline-size-mobile);

  @media (min-width: 900px) {
    font-size: var(--section-tagline-size-desktop);
  }
`

export const RadicalCopy = styled.div`
  grid-area: radical-copy;
  font-size: var(--copy-font-size-mobile);
  line-height: var(--copy-line-height);
  font-weight: 300;
  color: white;
  justify-self: left;

  @media screen and (min-width: 900px) {
    font-size: var(--copy-font-size-desktop);
    padding-bottom: 3.5vw;
  }
`

export const RadicalDrawersContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding-top: 4vw;

  grid-area: radical-drawers;
  width: 100vw;

  @media screen and (min-width: 900px) {
    padding-top: 0;
    margin-left: -16.5vw;
    margin-right: -10vw;
    width: 100vw;
    gap: 3.8vw;
    padding-bottom: 6.5vw;
  }
`

export const MouseGo = styled.div`
  grid-area: mouse-go;
  justify-self: left;
  display: block;
  background: linear-gradient(90deg, rgba(169, 45, 70, 1) 42%, rgba(227, 147, 0, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 6vw;
  font-weight: 900;
  opacity: ${({isvisible}) => isvisible === 'true' ? '100%' : '0'};
  transition: .4s ease-in-out;

  @media screen and (min-width: 900px) {
    font-size: 2.2vw;
    gap: .8vw;
  }
`

export const MouseIconDiv = styled.div`
  width: 4vw;
  margin-top: 2vw;
  margin-right: 1.5vw;
  float: left;

  @media (min-width: 900px) {
    width: 1.5vw;
    margin-right: .5vw;
    margin-top: .5vw;
  }
`

export const SocialIcons = styled.div`
  grid-area: social-icons;
  display: inline-flex;
  justify-self: right;
  align-self: center;
  padding-top: 2vw;
  gap: 2vw;
  opacity: ${({isvisible}) => isvisible === 'true' ? '100%' : '0'};
  transition: .4s ease-in-out;

  @media (min-width: 900px) {
    padding-top: 1vw;
    gap: .5vw;
  }
`

export const IconBox = styled.div`
  display: flex;
  color: white;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  border: .2vw solid white;
  font-size: 4.5vw;
  width: 5vw;
  height: 5vw;
  padding: 3vw;

  @media screen and (min-width: 900px) {
    border: .2vw solid white;
    font-size: 1.5vw;
    width: 1.5vw;
    height: 1.5vw;
    padding: 1vw;
  }

`

export const SocialMediaIconBox = styled.div`
  display: flex;
  color: white;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  border: .2vw solid white;
  font-size: 4.5vw;
  width: 5vw;
  height: 5vw;
  padding: 3vw;

  @media screen and (min-width: 900px) {
    display: flex;
    border: .2vw solid white;
    font-size: 1.5vw;
    width: 1.5vw;
    height: 1.5vw;
    padding: 1vw;
  }
`