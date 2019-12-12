import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import AnimateItem from "./animate-item"
import Delay from "../delay"
import styles from "./skills.css"

const Skill = ({
  skills,
  title,
  description,
  showLoadingAnimation = true,
  transitionStatus = "entered",
  type = "static",
  style = false,
}) => {
  const [loaded, setLoaded] = useState(false)
  const gridRef = useRef(null)
  const gridHeightRef = useRef(null)
  const wrapperDiv = useRef(null)

  /**
   * Remove transform css to let work fix position
   */
  function removeTransform() {
    if (wrapperDiv.current) {
      if (wrapperDiv.current.style.removeProperty) {
        wrapperDiv.current.style.removeProperty("transform")
      } else {
        wrapperDiv.current.style.removeAttribute("transform")
      }
    }
  }

  function getSkills() {
    removeTransform()
    return !loaded ? (
      <></>
    ) : (
      skills.map(({ title, image }) => (
        <AnimateItem type={type} title={title} key={title} image={image} />
      ))
    )
  }

  useScrollPosition(({ currPos }) => {
    if (type !== "static" && loaded) {
      gridRef.current.style.transform = `translate3d(0, ${currPos.y}px, 0)`
    }
  })

  useEffect(() => {
    wrapperDiv.current = document.querySelector(".tl-wrapper")
    if (type !== "static" && loaded) {
      gridHeightRef.current.style.height = `calc(${gridRef.current.clientHeight}px + 45rem)`
    }
  }, [type, loaded])

  function handleLoad() {
    setLoaded(true)
  }

  const cssStyles =
    type === "static"
      ? {
          section: styles.sectionStatic,
          header: [styles.header, styles.headerStatic, styles.noPointerEvents],
          h2: [styles.textRight, styles.noPointerEvents],
          p: [styles.textRight, styles.elementRight, styles.noPointerEvents],
          div: [styles.gridLayer, styles.gridLayerRight],
        }
      : {
          section: styles.section,
          header: [styles.header, styles.fixed, styles.noPointerEvents],
          h2: styles.noPointerEvents,
          p: styles.noPointerEvents,
          div: [styles.gridLayer, styles.gridLayerLeft],
        }

  return (
    <main css={styles.section} {...(style && { style })}>
      <header css={cssStyles.header}>
        <h2 css={cssStyles.h2}>{title}</h2>
        <p css={cssStyles.p}>{description}</p>
      </header>
      {/* TODO: Find a workaround for this */}
      {/* It appears that AniLink causes the page to render many times */}
      {/* {transitionStatus === "exited" ? ( */}
      <Delay
        wait={1000}
        cb={handleLoad}
        showLoadingAnimation={showLoadingAnimation}
      >
        <div css={cssStyles.div}>
          <ul css={styles.grid} data-test="skills" ref={gridRef}>
            {getSkills()}
          </ul>
        </div>
      </Delay>
      {/* ) : (
          <div css={cssStyles.div}>
            <ul css={styles.grid} ref={gridRef}>
              {getSkills()}
            </ul>
          </div>
        )} */}
      <div css={styles.gridHeight} ref={gridHeightRef}></div>
    </main>
  )
}

Skill.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showLoadingAnimation: PropTypes.bool,
  transitionStatus: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
}

export default Skill

// Inspired by https://github.com/codrops/IsometricGrids
