import { fireEvent } from "@testing-library/react"
import { renderHook, act as hookAct } from "@testing-library/react-hooks"
import useMQResize from "../useMQResize"

jest.useFakeTimers()

const mediaQueries = {
  min52: "(min-width: 52.5em)",
  max36: "(max-width: 36em)",
}

// Mock window matchmedia
const changeMatchMedia = matchQuery => {
  window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches: matchQuery(query),
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }
  })
}

describe("useMQResize", () => {
  it("match when the width is less than 52.5 em", () => {
    changeMatchMedia(
      query => query === "(min-width: 52.5em)" || query === "(max-width: 36em)"
    )
    const { result } = renderHook(() => useMQResize(mediaQueries))

    expect(result.current.min52).toBeTruthy()
    expect(result.current.max36).toBeTruthy()
  })

  it("detect multiple size change", () => {
    // Small Screen
    window.innerWidth = 554
    window.innerHeight = 554
    changeMatchMedia(query => query === "(max-width: 36em)")
    const { result } = renderHook(() => useMQResize(mediaQueries))
    expect(result.current.max36).toBeTruthy()
    expect(result.current.min52).toBeFalsy()

    // Medium Screen
    hookAct(() => {
      window.innerWidth = 762
      window.innerHeight = 762

      changeMatchMedia(query => false)
    })
    // Fire resize window
    fireEvent(window, new Event("resize"))
    hookAct(() => {
      jest.advanceTimersByTime(600)
    })
    expect(result.current.max36).toBeFalsy()
    expect(result.current.min52).toBeFalsy()

    // Big Screen
    hookAct(() => {
      window.innerWidth = 1000
      window.innerHeight = 1000
      // {min52: true, max36: false}
      changeMatchMedia(query => query === "(min-width: 52.5em)")
    })
    // Fire resize window
    fireEvent(window, new Event("resize"))
    hookAct(() => {
      jest.advanceTimersByTime(600)
    })
    expect(result.current.max36).toBeFalsy()
    expect(result.current.min52).toBeTruthy()
  })
})
