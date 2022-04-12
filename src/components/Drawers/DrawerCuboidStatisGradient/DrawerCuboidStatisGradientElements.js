import styled from "styled-components";

export const AdjustedDrawer = styled.div`
    --cube-width: ${({width}) => width};
    --cube-color: ${({cubeColor})=> cubeColor};
    --font-color: ${({fontColor}) => fontColor};
`;