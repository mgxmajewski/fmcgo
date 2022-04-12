import styled from "styled-components";

export const AdjustedDrawer = styled.div`
  --cube-width: ${({width}) => width};
  --cube-height: ${({height}) => height};
  --cube-depth: ${({depth}) => depth};
`;