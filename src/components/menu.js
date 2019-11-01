import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./menu.css"

const Menu = ({ numPoints, duration, delayPointsMax, delayPerPath }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const delayPointsArray = useRef([])
  const timeStart = useRef(Date.now())
  const elm = useRef()
  const elmHamburger = useRef()
  const path = useRef()
  const gNavItems = useRef()
  const isOpened = useRef(false)
  const isAnimating = useRef(false)

  useEffect(() => {
    path.current = elm.current.querySelectorAll("path")
    gNavItems.current = document.querySelectorAll(".global-menu-item")

    return () => {
      path.current = null
      elm.current = null
      gNavItems.current = null
    }
  }, [])

  const cubicInOut = t => {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
  }

  const toggle = () => {
    isAnimating.current = true
    const range = 4 * Math.random() + 6
    for (let i = 0; i < numPoints; i++) {
      const radian = (i / (numPoints - 1)) * Math.PI
      delayPointsArray.current[i] =
        ((Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4) *
        delayPointsMax
    }
    if (isOpened.current === false) {
      open()
    } else {
      close()
    }
  }

  const open = () => {
    isOpened.current = true
    elm.current.classList.add("is-opened")
    timeStart.current = Date.now()
    renderLoop()
  }

  const close = () => {
    isOpened.current = false
    elm.current.classList.remove("is-opened")
    timeStart.current = Date.now()
    renderLoop()
  }

  const updatePath = time => {
    const points = []
    for (let i = 0; i < numPoints + 1; i++) {
      points[i] =
        cubicInOut(
          Math.min(
            Math.max(time - delayPointsArray.current[i], 0) / duration,
            1
          )
        ) * 100
    }

    let str = ""
    str += isOpened.current ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `
    for (let i = 0; i < numPoints - 1; i++) {
      const p = ((i + 1) / (numPoints - 1)) * 100
      const cp = p - ((1 / (numPoints - 1)) * 100) / 2
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${
        points[i + 1]
      } `
    }
    str += isOpened.current ? `V 0 H 0` : `V 100 H 0`
    return str
  }

  const render = () => {
    if (isOpened.current) {
      for (let i = 0; i < path.current.length; i++) {
        path.current[i].setAttribute(
          "d",
          updatePath(Date.now() - (timeStart.current + delayPerPath * i))
        )
      }
    } else {
      for (let i = 0; i < path.current.length; i++) {
        path.current[i].setAttribute(
          "d",
          updatePath(
            Date.now() -
              (timeStart.current + delayPerPath * (path.current.length - i - 1))
          )
        )
      }
    }
  }

  const renderLoop = () => {
    render()
    if (
      Date.now() - timeStart.current <
      duration + delayPerPath * (path.current.length - 1) + delayPointsMax
    ) {
      requestAnimationFrame(() => {
        renderLoop()
      })
    } else {
      isAnimating.current = false
    }
  }

  const closeMenu = () => {
    if (isAnimating.current) {
      return false
    }

    isOpened.current = false
    elm.current.classList.remove("is-opened")
    timeStart.current = Date.now()
    isAnimating.current = false

    for (let i = 0; i < path.current.length; i++) {
      path.current[i].setAttribute("d", "")
    }

    elmHamburger.current.classList.remove("is-opened-navi")
    for (let i = 0; i < gNavItems.current.length; i++) {
      gNavItems.current[i].classList.remove("is-opened")
    }
  }

  function elmHamburgerClick() {
    if (isAnimating.current) {
      return false
    }
    toggle()
    if (isOpened.current === true) {
      elmHamburger.current.classList.add("is-opened-navi")
      for (let i = 0; i < gNavItems.current.length; i++) {
        gNavItems.current[i].classList.add("is-opened")
      }
    } else {
      elmHamburger.current.classList.remove("is-opened-navi")
      for (let i = 0; i < gNavItems.current.length; i++) {
        gNavItems.current[i].classList.remove("is-opened")
      }
    }
  }

  return (
    <main className="portfolio">
      <div>
        <div
          className="hamburger js-hover"
          ref={elmHamburger}
          onClick={elmHamburgerClick}
        >
          <div className="hamburger-line hamburger-line-1">
            <div className="hamburger-line-in hamburger-line-in-1"></div>
          </div>
          <div className="hamburger-line hamburger-line-2">
            <div className="hamburger-line-in hamburger-line-in-2"></div>
          </div>
          <div className="hamburger-line hamburger-line-3">
            <div className="hamburger-line-in hamburger-line-in-3"></div>
          </div>
          <div className="hamburger-line hamburger-line-cross-1">
            <div className="hamburger-line-in hamburger-line-in-cross-1"></div>
          </div>
          <div className="hamburger-line hamburger-line-cross-2">
            <div className="hamburger-line-in hamburger-line-in-cross-2"></div>
          </div>
        </div>
        <div className="global-menu">
          <div className="global-menu-wrap">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <AniLink
                paintDrip
                id={node.id}
                key={node.id}
                to={node.fields.slug}
                className="global-menu-item"
                hex="#663399"
                onClick={closeMenu}
              >
                {node.frontmatter.title}
              </AniLink>
            ))}
          </div>
        </div>
        <svg
          className="shape"
          ref={elm}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path className="shape-path"></path>
          <path className="shape-path"></path>
          <path className="shape-path"></path>
        </svg>
      </div>
    </main>
  )
}

Menu.propTypes = {
  numPoints: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  delayPointsMax: PropTypes.number.isRequired,
  delayPerPath: PropTypes.number.isRequired,
}

export default Menu
