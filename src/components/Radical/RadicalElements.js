import styled from "styled-components";

export const SocialMediaIconBox = styled.div`
  display: ${({isvisible}) => isvisible === 'true' ? 'flex' : 'none'};
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