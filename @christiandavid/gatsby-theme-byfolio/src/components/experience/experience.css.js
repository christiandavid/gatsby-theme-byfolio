import { css } from "@emotion/core"
import mediaQueryGenerator from "../../utils/mediaQGen"

const [media52Dot5em, media36em] = mediaQueryGenerator([
  { type: "min", size: "52.5" },
  { type: "max", size: "36" },
])

const styles = {
  experience: css`
    color: #fff;
    h1,
    h2,
    h3 {
      color: #fff;
    }
  `,
  header: css`
    position: relative;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0.3rem 6em 0;
    h1 {
      font-size: 3rem;
      line-height: 1.25;
      margin: 0;
      ${media36em} {
        font-size: 2.2rem;
        line-height: 0.8;
      }
    }
    p {
      display: block;
      max-width: calc(100vw - 5em);
      margin: 1em 0 0 5px;
      font-weight: 500;
    }
  `,
  grid: css`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: column wrap;
    align-content: space-between;
    min-height: 100vh;
    &::before,
    &::after {
      content: "";
      flex-basis: 100%;
      width: 0;
      order: 2;
    }
    ${media36em} {
      &::before,
      &::after {
        flex-basis: auto;
      }
    }
  `,
  job: css`
    width: 50%;
    min-width: 280px;
    margin: 0 0 2em;
    padding: 1em 4em 0;
    position: relative;
    &:nth-of-type(2n + 1) {
      order: 1;
    }
    &:nth-of-type(2n) {
      order: 2;
    }
    &::before {
      font-family: sans-serif;
      font-size: 10em;
      position: absolute;
      top: -1em;
      left: -0.15em;
      opacity: 0.3;
      content: attr(data-year);
    }
    ${media52Dot5em} {
      width: 33.33%;
      margin: 0 0 9em;
      &:first-of-type {
        margin-top: 5em;
      }
      &:nth-of-type(2) {
        margin-top: 14em;
      }
      &:nth-of-type(3n + 1) {
        order: 1;
      }
      &:nth-of-type(3n + 2) {
        order: 2;
      }
      &:nth-of-type(3n) {
        order: 3;
      }
    }
    ${media36em} {
      width: 100%;
      margin: 2em 0;
      padding: 1em 2em 0;
      &:nth-of-type(3n + 1) {
        order: 0;
      }
      &:nth-of-type(3n + 2) {
        order: 0;
      }
      &:nth-of-type(3n) {
        order: 0;
      }
    }
  `,
  link: css`
    display: block;
    color: #474283;
    &:hover {
      color: #474283;
      outline: none;
    }
  `,
  img: css`
    max-width: 100%;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);
    transform: translate3d(0, 0, 0);
    border-radius: 50%;
    position: relative;
    z-index: 1;
  `,
  year: css`
    font-size: 0.85em;
    position: absolute;
    z-index: 1;
    right: 0;
    margin: -1.4em 3em 0 0;
    padding: 0.3em 0.5em;
    color: #fff;
    border: 2px solid #fff;
  `,
  position: css`
    font-size: 1em;
    font-weight: 900;
    margin: 0 0 0 1em;
    white-space: nowrap;
  `,
  company: css`
    font-size: 0.9em;
    font-weight: 600;
    margin: 1em 0 0.5em;
  `,
}

export default styles
