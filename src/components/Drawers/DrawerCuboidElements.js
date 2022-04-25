import styled from "styled-components";

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

export const DefaultDrawerDimensionsProvider = styled.div`
  --cube-width: 6vw;
  /*--negative-cube-width: -6vw;*/
  --cube-height: 4.2vw;
  --cube-depth: 4vw;
  --cube-color: black;
  --font-color: white;
  --border-width: .6vw;
  --border-width-sides: .7vw;
  /*--side-font-size: 3.8vw;*/
  --side-font-size: 4.5vw;

  @media screen and (min-width: 900px) {
    --border-width: .3vw;
    --border-width-sides: .35vw;
    --side-font-size: 1.7vw;
`

// export const AdjustedDrawer = styled(DefaultDrawerDimensionsProvider)`
//   --cube-width: ${({brand}) => handleCustomWidthMobile(brand)};
//   --cube-height: ${({section}) => handleCustomHeightMobile(section)};
//   --cube-depth: ${({section}) => handleCustomDepthMobile(section)};
//   --cube-color: ${({cubeColor}) => cubeColor};
//   --font-color: ${({fontColor}) => fontColor};
//
//   @media screen and (min-width: 900px) {
//     --cube-width: ${({brand}) => handleCustomWidthDesktop(brand)};
//     --cube-height: 4.2vw;
//     --cube-depth: 4vw;
//   }
// `;
//   --drawer-animation-delay: ${({drawerDelay}) => drawerDelay};
//   --drawer-animation-delay: ${({drawerDelay}) => drawerDelay};

export const DrawerContainer = styled.div`
  --cube-width: ${({brand}) => handleCustomWidthMobile(brand)};
  --cube-height: ${({section}) => handleCustomHeightMobile(section)};
  --cube-depth: ${({section}) => handleCustomDepthMobile(section)};
  --cube-color: ${({cubeColor}) => cubeColor};
  --font-color: ${({fontColor}) => fontColor};
  //--drawer-animation-delay: 4s;
  --drawer-animation-delay: ${({drawerDelay}) => drawerDelay};
  --is-animation-running: ${({pause}) => pause};

  @media screen and (min-width: 900px) {
    --cube-width: ${({brand}) => handleCustomWidthDesktop(brand)};
    --cube-height: 4.2vw;
    --cube-depth: 4vw;
  }
  width: calc(var(--cube-width) * 1);
  height: calc(var(--cube-height) * 1);
  display: -webkit-box;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 2000px;
  perspective-origin: -450px -450px;
`


export const Cube = styled.div`
  position: relative;
  width: var(--cube-width);
  height: var(--cube-height);
  transform-style: preserve-3d;
`

export const Side = styled.div`
  position: absolute;
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: var(--side-font-size);
  color: var(--font-color);
  width: 100%;
  height: 100%;
  border: var(--border-width) solid var(--cube-color);
  outline: 1px solid transparent;
  border-collapse: collapse;

  @media screen and (min-width: 900px) {
    --border-width: .3vw;
    --border-width-sides: .35vw;
    font-size: 1.7vw;
  }

  //&.front {
  //  background-color: var(--cube-color);
  //  transform: translateZ(calc(var(--cube-depth)));
  //}

  &.gradient-front {
    border: 0;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#e22651+0,bc1f6d+25,f2ad10+100 */
    background: #e22651; /* Old browsers */
    background: -moz-linear-gradient(left, #e22651 0%, #bc1f6d 25%, #f2ad10 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #e22651 0%, #bc1f6d 25%, #f2ad10 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #e22651 0%, #bc1f6d 25%, #f2ad10 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e22651', endColorstr='#f2ad10', GradientType=1); /* IE6-9 */
  }

  &.gradient-back {
    border-image: linear-gradient(90deg, rgb(243, 177, 13), rgb(229, 40, 77)) 1;
    /*border-image: linear-gradient(49deg, rgba(243,177,13,1) 0%, rgba(225,43,77,1) 100%);*/
    /*border: 0;*/
  }

  &.front-z-animation {
    -webkit-animation-name: moveFront;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-direction: alternate;
    -webkit-animation-delay: var(--drawer-animation-delay);
    animation: moveFront 2s infinite ease-in-out alternate;
    animation-delay: var(--drawer-animation-delay);
    animation-play-state: var(--is-animation-running);
  }


  &.gradient-match-right {
    border: var(--border-width-sides) solid rgb(243, 177, 13);
  }

  &.right-z-animation {
    -webkit-animation-name: moveRightSide;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-direction: alternate;
    -webkit-animation-delay: var(--drawer-animation-delay);
    animation: moveRightSide 2s infinite ease-in-out alternate;
    animation-delay: var(--drawer-animation-delay);
    animation-play-state: var(--is-animation-running);
  }


  &.gradient-match-left {
    border: var(--border-width-sides) solid rgb(229, 40, 77);
  }

  &.left-z-animation {
    -webkit-animation-name: moveLeftSide;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-direction: alternate;
    -webkit-animation-delay: var(--drawer-animation-delay);
    animation: moveLeftSide 2s infinite ease-in-out alternate;
    animation-delay: var(--drawer-animation-delay);
    animation-play-state: var(--is-animation-running);
  }

  @keyframes moveFront {
    from {
      transform: translateZ(0);
    }
    to {
      transform: translateZ(calc(var(--cube-depth)));
    }
  }

  @keyframes moveLeftSide {
    from {
      transform: rotateY(-90deg) translateX(0);
      width: 0;
    }
    to {
      transform: rotateY(-90deg) translateX(0);
      width: calc(var(--cube-depth));
    }
  }

  @keyframes moveRightSide {
    from {
      width: 0;
      transform: rotateY(-90deg) translateZ(calc(var(--cube-width) * -1)) translateX(0);
    }
    to {
      width: var(--cube-depth);
      transform: rotateY(-90deg) translateZ(calc(var(--cube-width) * -1)) translateX(0);
    }
  }
`

export const FrontSide = styled(Side)`
  background-color: var(--cube-color);
  transform: translateZ(calc(var(--cube-depth)));
`

export const FrontSideWithHover = styled(FrontSide)`

  @media screen and (min-width: 900px) {
    &:hover > * {
      //width: 1.2vw;
      transform: scale(1.2);
    }
  }
`

export const BackSide = styled(Side)`
  transform: rotateY(180deg) translateZ(0);
`

export const RightSide = styled(Side)`
  width: var(--cube-depth);
  border-left: 0;
  border-right: 0;
  border-top: var(--border-width-sides) solid var(--cube-color);
  border-bottom: var(--border-width-sides) solid var(--cube-color);
  -webkit-transform: rotateY(90deg) translateZ(calc(var(--cube-width))) translateX(calc(var(--cube-depth) * -1));
  transform: rotateY(90deg) translateZ(calc(var(--cube-width))) translateX(calc(var(--cube-depth) * -1));
  transform-origin: left;
`

export const LeftSide = styled(Side)`
  width: var(--cube-depth);
  border-left: 0;
  border-right: 0;
  border-top: var(--border-width-sides) solid var(--cube-color);
  border-bottom: var(--border-width-sides) solid var(--cube-color);
  transform: rotateY(90deg) translateX(calc(var(--cube-depth) * -1));
  -webkit-transform: rotateY(90deg) translateX(calc(var(--cube-depth) * -1));
  transform-origin: left;
`