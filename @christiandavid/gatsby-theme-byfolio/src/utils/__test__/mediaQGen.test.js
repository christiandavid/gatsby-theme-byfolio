import mediaQGen from "../mediaQGen"

describe("mediaQGen", () => {
  it("should return a media query rule", () => {
    const media = mediaQGen([{ type: "min", size: "52.5" }])
    expect(media.length).toBe(1)
    expect(media[0]).toMatch("@media screen and (min-width: 52.5em)")
  })

  it("should return several media queries rules", () => {
    const media = mediaQGen([
      { type: "min", size: "52.5" },
      { type: "max", size: "36" },
      { type: "min", size: "50" },
      { type: "max", size: "100" },
    ])
    expect(media.length).toBe(4)
    expect(media[0]).toMatch("@media screen and (min-width: 52.5em)")
    expect(media[1]).toMatch("@media screen and (max-width: 36em)")
    expect(media[2]).toMatch("@media screen and (min-width: 50em)")
    expect(media[3]).toMatch("@media screen and (max-width: 100em)")
  })
})
