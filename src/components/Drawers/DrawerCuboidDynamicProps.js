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

// const handleCustomWidthMobileNegative = brand => {
//     switch (brand) {
//         case "carrefour":
//             return "-32vw";
//         case "pepsi":
//             return "-23vw";
//         case "desperados":
//             return "-34vw";
//         case "heineken":
//             return "-30vw";
//         case "develey":
//             return "-28vw";
//         case "costa":
//             return "-36vw";
//         case "tchibo":
//             return "-26vw";
//         case "stock":
//             return "-23vw";
//         case "sephora":
//             return "-28vw";
//         case "clarins":
//             return "-27vw";
//         case "slider":
//             return "-9vw"
//         default:
//             return "-36vw";
//     }
// };

const handleCustomWidthMobile = brand => {
    switch (brand) {
        case "carrefour":
            return "32vw";
        case "pepsi":
            return "23vw";
        case "desperados":
            return "34vw";
        case "heineken":
            return "30vw";
        case "develey":
            return "28vw";
        case "costa":
            return "36vw";
        case "tchibo":
            return "26vw";
        case "stock":
            return "23vw";
        case "sephora":
            return "28vw";
        case "clarins":
            return "27vw";
        case "slider":
            return "9vw"
        default:
            return "36vw";
    }
};

// const handleCustomWidthDesktopNegative = brand => {
//     switch (brand) {
//         case "carrefour":
//             return "-11.5vw";
//         case "pepsi":
//             return "-8.2vw";
//         case "desperados":
//             return "-11.2vw";
//         case "heineken":
//             return "-11.1vw";
//         case "develey":
//             return "-11vw";
//         case "costa":
//             return "-14vw";
//         case "tchibo":
//             return "-10vw";
//         case "stock":
//             return "-8.2vw";
//         case "sephora":
//             return "-11vw";
//         case "clarins":
//             return "-10.5vw";
//         case "slider":
//             return "-4.2vw"
//         default:
//             return "-9vw";
//     }
// };

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
            return "10vw";
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