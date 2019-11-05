import { css } from "@emotion/core"

const styles = {
  aboutSection: css`
    color: #000;
    font-size: 1.2rem;
  `,
  aboutContainer: css`
    margin: 0 auto;
    padding: 0 3rem;
    max-width: 800px;
  `,
  aboutContent: css`
    padding-top: 10vh;
  `,
  hTag: css`
    text-transform: uppercase;
    font-size: 2.4rem;
    line-height: 1.2em;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    display: inline-block;
    position: relative;
    &:not(:first-of-type) {
      padding-top: 5vh;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background: #000;
      height: 7px;
      width: 7rem;
    }
  `,
  aboutShadow: css`{
    color: rgba(0, 0, 0, 0.04);
    position: absolute;
    top: 20%;
    left: 20%;
    font-size: 12rem;
    font-weight: 900;
    width: 200vw;
    text-transform: capitalize;
    `,
}

export default styles
