import { css } from "@emotion/core"

const styles = css`
  html {
    box-sizing: border-box;
    overflow-y: auto;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  .clearfix::before,
  .clearfix::after {
    display: table;
    content: "";
  }
  .clearfix::after {
    clear: both;
  }
  body {
    margin: 0;
    color: hsla(0, 0%, 0%, 0.8);
    background: #282b2f;
    overflow: hidden;
    min-height: 100vh;
    min-height: -moz-available;
    min-height: -webkit-fill-available;
    min-height: fill-available;
    letter-spacing: -0.035em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transform-origin: 0 0;
  }
  a,
  h1,
  h2,
  h3,
  h4 {
    font-weight: 900;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  svg {
    pointer-events: none;
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
  .pgContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .pgContent {
    margin-bottom: 34.5px;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.5);
  }
  .pgContent,
  .tl-edges,
  .tl-wrapper,
  .layout-wrapper,
  .page,
  .layout-inner {
    display: flex;
    flex: auto;
  }
  .tl-wrapper {
    flex-direction: column;
  }
  .copy {
    color: #fff;
    padding: 9px 13px 0;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 34.5px;
  }
  .copy .heart {
    margin: 2px 4px;
  }
  .copy .hand {
    margin: 0 4px;
  }
  .copy svg {
    display: inline-block;
  }
  .copy svg:first-of-type {
    transform: rotateY(180deg);
  }
  .nolink {
    display: inline;
    color: #fff;
    text-decoration: none;
    font-size: 0.75em;
    font-weight: 500;
  }
  .heart {
    font-size: 0.55em;
    color: #c83d64;
  }
  .nolink:hover {
    color: #fff;
    text-decoration: none;
  }
  .nolink div {
    float: left;
  }
  .layout-wrapper {
    min-height: 100%;
    display: flex;
  }
  .layout-inner {
    width: 100%;
  }
  .white.layout-wrapper .layout-inner {
    background: #fff;
  }
  .white .data-section {
    color: #000;
  }
  .icon {
    display: block;
    width: 1.5em;
    height: 1.5em;
    margin: 0 auto;
    fill: currentColor;
  }
  a {
    color: #2fa0ec;
    text-decoration: none;
    outline: none;
  }
  a:hover,
  a:focus {
    color: #74777b;
    outline: none;
  }
  .hidden {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    pointer-events: none;
  }
  .bgPageColor {
    color: #282b2f;
    position: absolute;
    bottom: 0;
  }
`

export default styles
