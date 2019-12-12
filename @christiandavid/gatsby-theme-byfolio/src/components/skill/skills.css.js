import { css } from "@emotion/core"
import mediaQueryGenerator from "../../utils/mediaQGen"

const [media36em, media50em] = mediaQueryGenerator([
  { type: "max", size: "36" },
  { type: "max", size: "50" },
])

const gridImage = `
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  border-radius: 2%;
  background: #fff;
  margin: 0;
  padding: 0;
  position: relative;
`
const gridItem = `
  width: 200px;
  padding: 10px;
  margin: 0;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  ${media36em} {
    width: 150px;
  }
`

const styles = {
  textRight: css`
    text-align: right;
  `,
  elementRight: css`
    margin: 1em 0 0 auto;
  `,
  section: css`
    width: 100%;
    padding: 0 3vmax;
    h2 {
      margin: 0 0 1rem;
      font-size: 3rem;
      line-height: 1.25;
      ${media50em} {
        font-size: 2.4rem;
      }
    }
    p {
      padding: 0;
      font-weight: 700;
      max-width: 60%;
      ${media50em} {
        font-size: 1em;
        line-height: 1.2em;
        max-width: 500px;
      }
    }
  `,
  sectionStatic: css`
    width: 100%;
    padding: 4vmax;
    h2 {
      font-size: 6em;
      ${media36em} {
        font-size: 2.5em;
      }
    }
    p {
      font-size: 1em;
      max-width: 400px;
      font-weight: 700;
      position: relative;
    }
  `,
  noPointerEvents: css`
    pointer-events: none;
  `,
  header: css`
    padding: 0 3vmax;
  `,
  headerStatic: css`
    position: relative;
    z-index: 1;
  `,
  fixed: css`
    position: fixed;
  `,
  gridLayer: css`
    width: 100%;
  `,
  gridLayerRight: css`
    transform: perspective(3000px) translateY(-70px) rotateX(55deg)
      rotateZ(-45deg);
    transform-origin: center center;
    ${media50em} {
      width: calc(100% + 450px);
      transform: perspective(3000px) translateY(-17rem) rotateX(55deg)
        rotateZ(-45deg);
      transform-origin: center bottom;
    }
  `,
  gridLayerLeft: css`
    transform: translateX(0) translateY(0) rotateX(45deg) rotateZ(45deg);
    position: fixed;
    z-index: 2;
    transform-origin: top left;
    padding-top: 10rem;
    padding-left: 20rem;
    width: calc(80% + 20rem);
  `,
  gridHeight: css`
    width: 100%;
    pointer-events: none;
  `,
  grid: css`
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    transform-style: flat;
    transform: translate3d(0, 0, 0);
    justify-content: flex-start;
  `,
  gridItem: css`
    ${gridItem}
    &:hover span {
      opacity: 1;
      transform: translate3d(0, -5px, 0);
    }
    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 5px;
      right: 5px;
      bottom: 5px;
      left: 5px;
      background: rgba(0, 0, 0, 0.4);
      box-shadow: 0 0 14px 1px rgba(0, 0, 0, 0.4);
      transform: translateZ(-1px) scale(0.9);
      transition: transform 0.3s, opacity 0.3s, box-shadow 0.3s;
      backface-visibility: hidden;
      border-radius: 2%;
    }
    &:hover {
      &::before {
        box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.4);
      }
    }
  `,
  gridItemStatic: css`
    ${gridItem}
  `,
  gridImgContainer: css`
    position: relative;
    cursor: pointer;
    z-index: 1;
    display: block;
  `,
  gridImg: css`
    ${gridImage}
  `,
  gridImgStatic: css`
    ${gridImage}
    &:not(:first-of-type) {
      position: absolute;
      top: 0;
      left: 0;
    }
    &:nth-of-type(1) {
      background-color: #2d2d2d;
      border-radius: 3%;
    }
    &:nth-of-type(2) {
      background-color: #323232;
      border-radius: 3%;
    }
    &:nth-of-type(3) {
      background-color: #373737;
      border-radius: 3%;
    }
    &:nth-of-type(4) {
      background-color: #fff;
    }
  `,
  gridTitle: css`
    font-size: 1.1em;
    font-weight: 600;
    position: absolute;
    z-index: -1;
    bottom: 0;
    width: 100%;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    opacity: 0;
    transform: translate3d(0, -20px, 0);
    transition: transform 0.3s, opacity 0.3s;
  `,
}

export default styles
