import { useEffect, useState, useRef, useCallback } from "react"
import { useDebouncedCallback } from "use-debounce"
import isSSR from "../../utils/isSSR"

/**
 * Media Query Window Resize Hook
 * This function determines if the MediaQueryList matches
 * the size of the window, it is executed every time the screen is resized
 *
 * @param {*} queries Media Query List
 * @returns
 */
function useMQResize(queries) {
  const [queryMatch, setQueryMatch] = useState(null)
  const keys = useRef(Object.keys(queries))

  const handleQuery = useCallback(() => {
    const updatedMatches = keys.current.reduce((acum, media) => {
      acum[media] = !!window.matchMedia(queries[media]).matches
      return acum
    }, {})

    // Setting state to the updated matches
    setQueryMatch(updatedMatches)
  }, [queries])

  const [resizeHandler] = useDebouncedCallback(
    () => {
      handleQuery()
    },
    // Delay
    500
  )

  useEffect(() => {
    if (!isSSR && window.matchMedia) {
      // Add listener
      window.addEventListener("resize", resizeHandler)
      handleQuery()
    }

    return () => {
      // Remove listener
      !isSSR &&
        window.matchMedia &&
        window.removeEventListener("resize", resizeHandler)
    }
  }, [handleQuery, queries, resizeHandler])

  return queryMatch
}

export default useMQResize
