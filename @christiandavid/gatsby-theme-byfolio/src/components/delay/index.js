import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styles from "./delay.css"

/**
 * Delay the component load for the specified time
 *
 * @param {ReactNode} children
 * @param {function} cb callback funtion
 * @param {boolean} showLoadingAnimation show loading animation
 * @param {integer} wait time to wait in seconds
 */
const Delay = ({
  children,
  cb = () => {},
  showLoadingAnimation = true,
  wait = 600,
}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      cb()
    }, wait)

    return () => {
      clearTimeout(timer)
    }
  }, [cb, wait])

  return !loading ? (
    children
  ) : showLoadingAnimation ? (
    <div css={styles.delayLoading}></div>
  ) : (
    <></>
  )
}

Delay.propTypes = {
  children: PropTypes.node.isRequired,
  cb: PropTypes.func,
  showLoadingAnimation: PropTypes.bool,
  wait: PropTypes.number,
}

export default Delay
