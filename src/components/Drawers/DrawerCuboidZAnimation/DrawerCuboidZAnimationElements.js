import styled from "styled-components";

export const AdjustedDrawer = styled.div`
  --cube-width: ${({width}) => width};
  --cube-height: ${({height}) => height};
  --cube-depth: ${({depth}) => depth};

  .carrefour {
    --cube-width: 11.5vw;
  }

  @media (min-width: 900px) {
    .carrefour {
      --cube-width: 11.5vw;
    }
  }

`;