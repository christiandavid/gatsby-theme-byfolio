import { useEffect, useRef } from "react"

/**
 * Get the previous props or state
 *
 * @param {*} value
 * @returns {*} re
 */
function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default usePrevious
