import { useEffect, useState, useCallback } from "react"
import { useDebouncedCallback } from "use-debounce"
import isSSR from "../../utils/isSSR"

/**
 * Window Resize Hook
 * This function detects and returns the new window or element width and height
 *
 * @param {boolean||ref} [ref=false]
 * @param {number} [delay=500]
 * @returns {object} [{width, height}]
 */
function useWnResize(ref = false, delay = 500) {
  const [windowSize, setWindowSize] = useState(null)

  const getSize = useCallback(() => {
    // Setting state to the updated matches
    setWindowSize({
      width: ref === false ? window.innerWidth : ref.current.offsetWidth,
      height: ref === false ? window.innerHeight : ref.current.offsetHeight,
    })
  }, [ref])

  const [resizeHandler] = useDebouncedCallback(() => {
    getSize()
  }, delay)

  useEffect(() => {
    if (!isSSR) {
      // Add listener
      window.addEventListener("resize", resizeHandler)
      getSize()
    }

    return () => {
      // Remove listener
      !isSSR && window.removeEventListener("resize", resizeHandler)
    }
  }, [resizeHandler, ref, getSize])

  return windowSize
}

export default useWnResize
