import { css } from "@emotion/core"
import mediaQueryGenerator from "../../utils/mediaQGen"

const [media45em] = mediaQueryGenerator([{ type: "max", size: "45" }])

const styles = {
  job: css`
    color: #5f6669;
    background: #1e2021;
    a {
      text-decoration: none;
      outline: none;
    }
    h1,
    h2,
    h3 {
      color: #fff;
    }
    ${media45em} {
      a {
        color: #fff;
      }
    }
  `,
  arrowBack: css`
    right: 0;
    bottom: 0;
    position: fixed;
    margin: 0 1.5em 1.25em 0;
    background: none;
    border: 4px solid;
    padding: 0;
    display: block;
    width: 3em;
    height: 3em;
    font-size: 1.25em;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.5s;
    z-index: 1001;
    background: #1568dd;
    border-color: #1568dd;
    color: #fff;
    box-shadow: 0 14px 59px -7px rgba(0, 0, 0, 0.85);
    &:focus {
      outline: none;
    }
    &:hover {
      background: inherit;
      color: #1568dd;
    }
    ${media45em} {
      margin: 0 0.25em 0.75em 0;
      background: #1568dd;
      border-color: #1568dd;
    }
  `,
  iconJob: css`
    display: block;
    width: 1.8em;
    height: 1.8em;
    margin: 0 auto;
    fill: currentColor;
    height: 3.1em;
  `,
  slideshow: css`
    position: relative;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    height: 100vh;
    max-height: 1000px;
    pointer-events: none;
    &:focus {
      outline: none;
    }
    ${media45em} {
      padding-top: 7em;
      height: calc(100vh - 40px);
    }
  `,
  slideshowNav: css`
    position: absolute;
    pointer-events: none;
    z-index: 2;
    font-size: 5em;
    right: 0.1em;
    bottom: 1em;
    ${media45em} {
      font-size: 4em;
      right: auto;
      bottom: 0em;
      left: 0em;
    }
  `,
  btnjob: css`
    display: inline-block;
    margin: 0;
    padding: 0;
    cursor: pointer;
    pointer-events: auto;
    color: #fff;
    border: none;
    background: none;
    font-size: 1.5em;
    display: block;
    .icon {
      height: 0.5em;
    }
    &:focus {
      outline: none;
    }
    &:hover {
      color: #1568dd;
    }
    &:nth-of-type(2) {
      margin: 0 0 0 0.5em;
    }
  `,
  gradient: css`
    background-image: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 0, 0, 0.5)
    );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    pointer-events: none;
  `,
  slide: css`
    width: 100%;
    margin: 0 0 1em 0;
    padding: 3em 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    margin: 0;
    pointer-events: none;
    opacity: 0;
    .slide-img-inner {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      transform: rotateZ(0deg);
      backface-visibility: hidden;
      will-change: tranform, opacity;
      background-position: 50% 50%;
      background-size: cover;
    }
    ${media45em} {
      padding: 6em 0;
    }
  `,
  slideCurrent: css`
    pointer-events: auto;
  `,
  slideImgCaption: css`
    font-family: "Gochi Hand", cursive;
    position: absolute;
    width: 100%;
    top: 83%;
    text-align: center;
    margin: 0;
    padding: 1em;
    font-size: 1.25em;
    color: #25303b;
    font-weight: normal;
    ${media45em} {
      font-size: 0.75em;
    }
  `,
  animationContainer: css`
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `,
  slideTitle: css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 11em);
    max-width: 800px;
    padding: 2em;
    color: #e8e8e8;
    z-index: 2;
    pointer-events: none;
    opacity: 0;
    font-weight: 500;
    opacity: 0;
    ${media45em} {
      width: calc(100% - 2em);
      margin: 0 0 4em 0;
      padding: 1.5em;
    }
  `,
  slideTitleMain: css`
    font-size: 6em;
    line-height: 0.8;
    display: inline-block;
    margin: 0;
    color: #e8e8e8;
    ${media45em} {
      font-size: 4em;
    }
  `,
  slideTitleSub: css`
    font-size: 1.15em;
    line-height: 1.5;
    margin: 1em 0 0 0;
    padding: 8px;
    a {
      border-bottom: 1px solid;
    }
    ${media45em} {
      font-size: 1.3em;
      line-height: 1;
    }
  `,
  slideImgwrap: css`
    position: relative;
    width: calc(100% - 6em);
    height: 100%;
    margin: 0 auto;
    ${media45em} {
      width: calc(100% - 1em);
    }
  `,
  slideLayout1: css`
    .slide-img {
      position: absolute;
      width: calc(50% - 1em);
    }
    .slide-img:first-of-type {
      left: 0.5em;
      height: 100%;
    }
    .slide-img:nth-of-type(n + 2) {
      left: calc(50% + 0.5em);
      height: calc(50% - 0.5em);
    }
    .slide-img:nth-of-type(3) {
      top: calc(50% + 0.5em);
    }
  `,
  slideLayout2: css`
    .slide-img {
      position: absolute;
      top: 50%;
      left: 50%;
    }
    .slide-img:not(:last-child) {
      width: 300px;
      height: 300px;
    }
    .slide-img:not(:last-child) .slide-img-inner {
      border: 5px solid #fff;
    }
    .slide-img:first-of-type {
      transform: translate3d(-50%, -50%, 0) translate3d(-60%, -40%, 0)
        rotate(-16deg);
    }
    .slide-img:nth-of-type(2) {
      transform: translate3d(-50%, -50%, 0) translate3d(60%, -40%, 0)
        rotate(10deg);
    }
    .slide-img:nth-of-type(3) {
      transform: translate3d(-50%, -50%, 0) translate3d(60%, 40%, 0)
        rotate(-15deg);
    }
    .slide-img:nth-of-type(4) {
      transform: translate3d(-50%, -50%, 0) translate3d(-60%, 40%, 0)
        rotate(10deg);
    }
    .slide-img:last-child {
      transform: translate3d(-50%, -50%, 0);
      width: 450px;
      height: 400px;
    }
    .slide-img:last-child .slide-img-inner {
      border: 10px solid #fff;
      border-bottom-width: 65px;
    }
    ${media45em} {
      .slide-img:not(:last-child) {
        width: 100px;
        height: 100px;
      }
      .slide-img:last-child .slide-img-inner {
        border-bottom-width: 40px;
      }
      .slide-img:last-child {
        width: 160px;
        height: 160px;
      }
    }
  `,
  slideLayout3: css`
    .slide-img {
      position: absolute;
    }
    .slide-img:nth-of-type(2) {
      top: 15%;
      left: 15%;
      width: 30%;
      height: 50%;
    }
    .slide-img:first-of-type {
      top: 40%;
      left: 5%;
      width: 80%;
      height: 60%;
    }
    .slide-img:nth-of-type(3) {
      top: 0;
      left: 40%;
      width: 40%;
      height: 60%;
    }
    .slide-img:nth-of-type(4) {
      top: 50%;
      left: 75%;
      width: 22.5%;
      height: 42.5%;
    }
  `,
  slideLayout4: css`
    .slide-img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 45%;
      padding-bottom: 45%;
      transform: translate3d(-50%, -50%, 0);
    }
    .slide-img-inner {
      border-radius: 50%;
    }
    .slide-img:first-of-type {
      transform: translate3d(0%, -40%, 0) scale(0.6);
    }
    .slide-img:nth-of-type(3) {
      transform: translate3d(-100%, -60%, 0) scale(0.75);
    }
  `,
  slideLayout5: css`
    .slide-img {
      position: absolute;
      top: 10%;
      width: 40%;
      height: 80%;
    }
    .slide-img:nth-of-type(2) {
      left: 30%;
    }
    .slide-img:nth-of-type(3) {
      left: 60%;
    }
    .slide-img-inner {
      -webkit-clip-path: polygon(0% 100%, 30% 0%, 100% 0%, 70% 100%);
      clip-path: polygon(0% 100%, 30% 0%, 100% 0%, 70% 100%);
      -webkit-clip-path: url("#polygon-clip-rhomboid");
      clip-path: url("/#polygon-clip-rhomboid");
    }
  `,
}

export default styles
