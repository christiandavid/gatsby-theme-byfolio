import { fireEvent } from "@testing-library/react"
import { renderHook, act as hookAct } from "@testing-library/react-hooks"
import useWnResize from "../useWnResize"

jest.useFakeTimers()

describe("useMQResize", () => {
  it("detect element resize after a window resize", () => {
    const ref = {
      current: {
        offsetWidth: 2048,
        offsetHeight: 1152,
      },
    }

    const { result, rerender } = renderHook(ref => useWnResize(ref, 1), {
      initialProps: ref,
    })

    expect(result.current.width).toBe(2048)
    expect(result.current.height).toBe(1152)

    ref.current.offsetWidth = 1024
    ref.current.offsetHeight = 768

    fireEvent(window, new Event("resize"))

    rerender(ref)

    hookAct(() => {
      jest.advanceTimersByTime(2)
    })

    expect(result.current.width).toBe(1024)
    expect(result.current.height).toBe(768)
  })

  it("detect window resize after a window", () => {
    const { result } = renderHook(() => useWnResize())

    expect(result.current.width).toBe(1024)
    expect(result.current.height).toBe(768)

    hookAct(() => {
      window.innerWidth = 2048
      window.innerHeight = 1152
    })

    fireEvent(window, new Event("resize"))

    hookAct(() => {
      jest.advanceTimersByTime(600)
    })

    expect(result.current.width).toBe(2048)
    expect(result.current.height).toBe(1152)
  })
})
