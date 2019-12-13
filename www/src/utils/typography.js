import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  googleFonts: [
    {
      name: "Source Sans Pro",
      styles: ["400", "700"],
    },
    {
      name: "Roboto",
      styles: ["400", "700"],
    },
    {
      name: "Noto Sans",
      styles: ["400", "700&display=swap"],
    },
  ],
  headerFontFamily: [
    "Source Sans Pro",
    "Avenir",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
  ],
  bodyFontFamily: [
    "Futura PT",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
  overrideStyles: () => ({
    a: {
      fontFamily: `"Source Sans Pro", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif`,
    },
  }),
})

export default typography
export const rhythm = typography.rhythm
