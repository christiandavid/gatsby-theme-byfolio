import React, { useEffect, useState, useRef, createRef } from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { jsx } from "@emotion/core"
import styles from "./menu.css"

const Menu = ({
  numPoints,
  duration,
  delayPointsMax,
  delayPerPath,
  fixedMenuPosition,
  bgClassName,
}) => {
  const data = [
    { title: "Home", url: "/", color: "#000" },
    { title: "Experience", url: "/experience", color: "#3a3d98" },
    { title: "Skills", url: "/skills", color: "#d52d43" },
    { title: "About Me", url: "/about-me", color: "#fff" },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(null)
  const elmHamburger = useRef()
  const isAnimating = useRef(false)
  const svgRef = useRef()

  useEffect(() => {
    // TODO: Improve this
    const path = svgRef.current.querySelectorAll("path")
    const delayPointsArray = []
    let timeStart = Date.now()

    function cubicInOut(t) {
      return t < 0.5
        ? 4.0 * t * t * t
        : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
    }

    function updatePath(time) {
      const points = []
      for (let i = 0; i < numPoints + 1; i++) {
        points[i] =
          cubicInOut(
            Math.min(Math.max(time - delayPointsArray[i], 0) / duration, 1)
          ) * 100
      }

      let str = ""
      str += isMenuOpen ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `
      for (let i = 0; i < numPoints - 1; i++) {
        const p = ((i + 1) / (numPoints - 1)) * 100
        const cp = p - ((1 / (numPoints - 1)) * 100) / 2
        str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${
          points[i + 1]
        } `
      }
      str += isMenuOpen ? `V 0 H 0` : `V 100 H 0`
      return str
    }

    function render() {
      if (isMenuOpen) {
        for (let i = 0; i < path.length; i++) {
          path[i].setAttribute(
            "d",
            updatePath(Date.now() - (timeStart + delayPerPath * i))
          )
        }
      } else {
        for (let i = 0; i < path.length; i++) {
          path[i].setAttribute(
            "d",
            updatePath(
              Date.now() - (timeStart + delayPerPath * (path.length - i - 1))
            )
          )
        }
      }
    }

    function renderLoop() {
      render()
      if (
        Date.now() - timeStart <
        duration + delayPerPath * (path.length - 1) + delayPointsMax
      ) {
        requestAnimationFrame(() => {
          renderLoop()
        })
      } else {
        isAnimating.current = false
      }
    }

    function toggle() {
      isAnimating.current = true
      const range = 4 * Math.random() + 6
      for (let i = 0; i < numPoints; i++) {
        const radian = (i / (numPoints - 1)) * Math.PI
        delayPointsArray[i] =
          ((Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4) *
          delayPointsMax
      }

      timeStart = Date.now()
      renderLoop()
    }

    // Just animate when change the status
    if (isMenuOpen !== null) {
      toggle()
    }
  }, [delayPerPath, delayPointsMax, duration, isMenuOpen, numPoints])

  function elmHamburgerClick() {
    if (isAnimating.current) {
      return false
    }
    setIsMenuOpen(!isMenuOpen)
  }

  function svgIcos() {
    return (
      <svg
        css={styles.shape}
        {...(isMenuOpen && { className: "is-opened" })}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        ref={svgRef}
      >
        {Array(3)
          .fill("")
          .map((_item, index) => (
            <path key={`path${index}`} css={styles.shapePath}></path>
          ))}
      </svg>
    )
  }

  const mainClass = fixedMenuPosition
    ? [styles.portfolio, styles.fixedPosition]
    : styles.portfolio
  const bgLinkColor =
    styles[bgClassName ? `${bgClassName}HamburgerLineIn` : `hamburgerLineIn`]

  return (
    <main css={mainClass}>
      <div>
        <div
          className={`hamburger${isMenuOpen ? " is-opened-navi" : ""}`}
          ref={elmHamburger}
          onClick={elmHamburgerClick}
        >
          <div className="hamburger-line hamburger-line-1">
            <div
              css={bgLinkColor}
              className="hamburger-line-in hamburger-line-in-1"
            ></div>
          </div>
          <div className="hamburger-line hamburger-line-2">
            <div
              css={bgLinkColor}
              className="hamburger-line-in hamburger-line-in-2"
            ></div>
          </div>
          <div className="hamburger-line hamburger-line-3">
            <div
              css={bgLinkColor}
              className="hamburger-line-in hamburger-line-in-3"
            ></div>
          </div>
          <div className="hamburger-line hamburger-line-cross-1">
            <div
              css={bgLinkColor}
              className="hamburger-line-in hamburger-line-in-cross-1"
            ></div>
          </div>
          <div className="hamburger-line hamburger-line-cross-2">
            <div
              css={bgLinkColor}
              className="hamburger-line-in hamburger-line-in-cross-2"
            ></div>
          </div>
        </div>
        <div css={styles.globalMenu}>
          <div>
            {data.map(({ title, url, color }) => (
              <AniLink
                paintDrip
                key={url}
                to={url}
                hex={color}
                className={`global-menu-item${isMenuOpen ? " is-opened" : ""}`}
              >
                {title}
              </AniLink>
            ))}
          </div>
        </div>
        {svgIcos()}
      </div>
    </main>
  )
}

Menu.propTypes = {
  numPoints: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  delayPointsMax: PropTypes.number.isRequired,
  delayPerPath: PropTypes.number.isRequired,
  fixedMenuPosition: PropTypes.bool.isRequired,
  bgClassName: PropTypes.string,
}

export default Menu
