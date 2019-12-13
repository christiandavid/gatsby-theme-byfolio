import isSSR from "../isSSR"

describe("isSSR", () => {
  it("should return false when window is undefined", () => {
    expect(isSSR).toBeFalsy
  })
})
