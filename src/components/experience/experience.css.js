import { css } from "@emotion/core"
import mediaQueryGenerator from "../../utils/mediaQGen"

const [media52Dot5em, media36em] = mediaQueryGenerator([
  { type: "min", size: "52.5" },
  { type: "max", size: "36" },
])

const styles = {}

export default styles
