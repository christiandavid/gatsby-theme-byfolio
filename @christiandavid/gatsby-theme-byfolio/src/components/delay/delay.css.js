import { css, keyframes } from "@emotion/core"

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const styles = {
  delayLoading: css`
    &::after {
      content: "";
      position: fixed;
      z-index: 1000;
      top: 50%;
      left: 50%;
      width: 50px;
      height: 50px;
      margin: 1px;
      border-radius: 50%;
      border: 3px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: ${loading} 0.7s linear infinite;
    }
  `,
}

export default styles
