import { css } from "@emotion/core"
import mediaQueryGenerator from "../utils/mediaQGen"

const [media45em] = mediaQueryGenerator([{ type: "max", size: "45" }])

const styles = {
  jobtitle: css`
    width: 100%;
    background-color: #fff;
    h1,
    h3 {
      color: #000;
    }
    h3 {
      margin-bottom: 0;
    }
  `,
  jobtitleContent: css`
    padding: 1.2rem 3rem 1.2rem 3rem;
    max-width: 1600px;
    margin: 0 auto;
  `,
  contentText: css`
    max-width: 1600px;
    position: relative;
    column-count: 2;
    column-gap: 3rem;
    text-align: justify;
    margin: 0 auto;
    padding: 2rem 3rem;
    p,
    li {
      font-size: 1.15rem;
      line-height: 1.3;
      color: #a7a7a7;
    }
    p {
      margin: 0 0 1em;
    }
    ${media45em} {
      font-size: 0.85em;
      column-count: auto;
      column-gap: initial;
      text-align: justify;
      margin: 0 auto;
      padding: 0.7rem 1rem;
    }
  `,
}

export default styles
