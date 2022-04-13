// import styled from "styled-components";
//
// export const AdjustedDrawer = styled.div`
//   --cube-width: ${({width}) => width};
//   --cube-height: ${({height}) => height};
//   --cube-depth: ${({depth}) => depth};
//   --cube-color: ${({cubeColor}) => cubeColor};
//   --font-color: ${({fontColor}) => fontColor};
// `;

import styled from "styled-components";

const handleCustomWidthMobile = brand => {
    switch (brand) {
        case "carrefour":
            return "24vw";
        case "pepsi":
            return "17vw";
        case "desperados":
            return "28vw";
        case "heineken":
            return "24vw";
        case "develey":
            return "22vw";
        case "costa":
            return "32vw";
        case "tchibo":
            return "20vw";
        case "stock":
            return "17vw";
        case "sephora":
            return "22vw";
        case "clarins":
            return "21vw";
        case "slider":
            return "9vw"
        default:
            return "32vw";
    }
};

const handleCustomWidthDesktop = brand => {
    switch (brand) {
        case "carrefour":
            return "11.5vw";
        case "pepsi":
            return "8.2vw";
        case "desperados":
            return "11.2vw";
        case "heineken":
            return "11.1vw";
        case "develey":
            return "11vw";
        case "costa":
            return "14vw";
        case "tchibo":
            return "10vw";
        case "stock":
            return "8.2vw";
        case "sephora":
            return "11vw";
        case "clarins":
            return "10.5vw";
        case "slider":
            return "4.2vw"
        default:
            return "9vw";
    }
};

const handleCustomDepthMobile = section => {
    switch (section) {
        case "co-section":
            return "10vw";
        default:
            return "12vw";
    }
}

const handleCustomHeightMobile = section => {
    switch (section) {
        case "co-section":
            return "9vw";
        default:
            return "14vw";
    }
}

export const AdjustedDrawer = styled.div`
  --cube-width: ${({brand}) => handleCustomWidthMobile(brand)};
  --cube-height: ${({section}) => handleCustomHeightMobile(section)};
  --cube-depth: ${({section}) => handleCustomDepthMobile(section)};
  --cube-color: ${({cubeColor}) => cubeColor};
  --font-color: ${({fontColor}) => fontColor};

  @media (min-width: 900px) {
    --cube-width: ${({brand}) => handleCustomWidthDesktop(brand)};
    --cube-height: 4.2vw;
    --cube-depth: 4vw;
  }
`;