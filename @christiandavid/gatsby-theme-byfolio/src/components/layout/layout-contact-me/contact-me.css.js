import { css } from "@emotion/core"
import mediaQueryGenerator from "../../../utils/mediaQGen"

const [media40em] = mediaQueryGenerator([{ type: "max", size: "40" }])

const styles = {
  wrapper: css`
    .contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50vh;
    }
    .page {
      width: 100%;
      position: relative;
      perspective: 1200px;
      perspective-origin: 50% 0;
      ${media40em} {
        perspective-origin: 50% -10%;
      }
    }
    .tab {
      transition: transform 1s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      &:first-of-type {
        background: #3d3d3d;
      }
      &:nth-of-type(2) {
        background: #848484;
      }
      &:nth-of-type(3) {
        background: #bbbbbb;
      }
    }
    .page-move {
      pointer-events: none;
      .tab:first-of-type {
        transform: translate3d(0px, 75vh, -300px);
      }
      .tab:nth-of-type(2) {
        transform: translate3d(0px, 75vh, -250px);
      }
      .tab:nth-of-type(3) {
        transform: translate3d(0px, 75vh, -200px);
      }
      .tab:nth-of-type(4) {
        transform: translate3d(0px, 75vh, -150px);
      }
    }
    .btn-contactme-close {
      pointer-events: none;
      font-size: 2em;
      position: absolute;
      top: 1.25em;
      right: 1.25em;
      display: block;
      color: #fff;
      z-index: 2;
      opacity: 0;
      transform: scale3d(0.8, 0.8, 1);
      transition: opacity 0.5s, transform 0.5s;
      ${media40em} {
        font-size: 1.25em;
      }
    }
    .contactme-open .btn-contactme-close {
      pointer-events: auto;
    }
    .contactme-open {
      pointer-events: auto;
    }
    .contactme-container {
      margin: 5em 0;
      color: #fff;
      width: 100%;
    }
    .contactme-info {
      font-size: 1.5rem;
      display: block;
      width: 75%;
      margin: 0 auto;
      padding: 0.85em 0;
      text-align: center;
      display: block;
      transform: translate3d(0, 20px, 0);
      p {
        margin-bottom: 0;
      }
      ${media40em} {
        font-size: 1.3rem;
      }
    }
    .contactme-open .btn-contactme-close {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
    .contactme-container,
    .contactme-info {
      opacity: 0;
      transform: translate3d(0, 150px, 0);
      transition: opacity 1s, transform 1s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }
    .contactme-open .contactme-container,
    .contactme-open .contactme-info {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .contactme-open .contactme-info {
      transition-delay: 0.35s;
    }
  `,
  pageTab: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate3d(0);
  `,
  mainContainer: css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100%;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: 50% 10em;
    background-size: 75% auto;
  `,
  layoutMagin: css`
    margin-bottom: 1.45rem;
  `,
  pageContainer: css`
    margin: 0 auto;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
    min-height: 100%;
  `,
  contactContactme: css`
    position: absolute;
    top: 1.15em;
    right: 1.25em;
    z-index: 1;
    ${media40em} {
      font-size: 0.85em;
      position: absolute;
      top: 2.15em;
      right: 2em;
    }
  `,
  btn: css`
    margin: 0;
    padding: 0;
    cursor: pointer;
    border: none;
    background: none;
    text-decoration: none;
    color: #000;
    outline: none;
    &:focus {
      outline: none;
    }
  `,
  btnContactme: css`
    font-size: 1.5em;
  `,
  contactMe: css`
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1;
    display: inline-block;
    box-sizing: border-box;
    width: 75%;
    max-width: 900px;
    padding: 3em 0 0.1em;
  `,
  whiteLink: css`
    color: #fff;
    display: inline-block;
    padding: 10px;
  `,
}

export default styles
