import styled from "styled-components";

export const PlusContainer = styled.div`
  display: ${({isShowMore}) => (isShowMore ? 'none' : 'grid')};
  cursor: pointer;
  grid-template-columns: 7fr 5fr;
  column-gap: 5vw;
  justify-content: center;
  align-items: start;
  width: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.989233193277311) 44%, rgba(255, 255, 255, 0.4514180672268907) 100%);
  z-index: 1000;
  height: ${({isShowMore}) => (isShowMore ? '0' : '38vw')};
   margin-top: ${({isShowMore}) => (isShowMore ? '0' : '-40vw')};
   padding-top: 26vw;
  
  @media screen and (min-width: 900px) {
    display: none;
    //display: grid;
    //width: 10vw;
    //pointer-events: none;
    //padding-top: 6vw;
    //margin-top: 0;
    //height: auto;
    //grid-template-columns: auto;
  }

  & > * {
    width: 10vw;
  }

  @media screen and (min-width: 900px) {
    & > * {
      width: 5vw;
      height: auto;
    }
  }
`

export const MobileOnlyInfo = styled.div`
  display: ${({isShowMore}) => (isShowMore ? 'none' : 'grid')};
  color: black;
  justify-items: right;
  width: 100%;
  font-weight: bold;
  z-index: 10001;
  @media screen and (min-width: 900px) {
    display: none;
  }
`