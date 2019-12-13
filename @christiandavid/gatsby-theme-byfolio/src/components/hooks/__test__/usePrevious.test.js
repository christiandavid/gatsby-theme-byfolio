import { renderHook, act as hookAct } from "@testing-library/react-hooks"
import usePrevious from "../usePrevious"

describe("usePrevious", () => {
  it("remember the previous value", () => {
    let firstValue = "first"
    let value = firstValue
    const { result, rerender } = renderHook(value => usePrevious(value), {
      initialProps: value,
    })
    expect(result.current).toBeUndefined()

    // Change the value
    value = "second"
    rerender(value)
    expect(result.current).toEqual(firstValue)
  })
})
