import React, { useEffect, useRef, createRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image/withIEPolyfill"
import anime from "animejs"
import { usePrevious } from "../hooks"
import layoutConfig from "./layoutConfig"
import styles from "./slideshow.css"

const Slide = ({
  active,
  title,
  description,
  layout,
  files,
  dimentions,
  direction,
  onEndAnimating,
  caption = null,
}) => {
  const prevActive = usePrevious(active)
  const slideRef = useRef()
  const titleRef = useRef()
  const imagesRef = useRef(files.map(createRef))

  useEffect(() => {
    let animeInTimeout

    /**
     * Get the animation properties for animejs
     *
     * @param {Object} layout Options
     * @param {Boolean} inString
     * @returns {Object} Transform object
     */
    function getAnimationProperties(layoutConf, inString) {
      const transformProp = {}
      let transform = ""

      /**
       * Build the transform property
       *
       * @param {Object} { property, dimention}
       * @returns {Object} Transform property
       */
      const getTransformValue = ({ property, dimention }) => {
        let transformValue
        if (layoutConf[property] !== undefined) {
          if (dimention !== false) {
            transformValue =
              typeof layoutConf[property] === "object"
                ? () =>
                    typeof layoutConf[property][direction] === "function"
                      ? getValuePercentage(
                          layoutConf[property][direction](),
                          dimention
                        )
                      : getValuePercentage(
                          layoutConf[property][direction],
                          dimention
                        )
                : getValuePercentage(layoutConf[property], dimention)
          } else {
            transformValue =
              typeof layoutConf[property] === "object"
                ? () =>
                    typeof layoutConf[property][direction] === "function"
                      ? layoutConf[property][direction]()
                      : layoutConf[property][direction]
                : layoutConf[property]
          }
        }

        return transformValue
      }

      const tranform = [
        { property: "translateX", dimention: "width" },
        { property: "translateY", dimention: "height" },
        { property: "rotateZ", dimention: false },
        { property: "scale", dimention: false },
      ]
      tranform.forEach(({ property, dimention }) => {
        const transformValue = getTransformValue({
          property,
          dimention,
        })
        if (transformValue !== undefined) {
          if (inString) {
            let type
            switch (property) {
              case "rotateZ":
                type = "deg"
                break
              case "scale":
                type = ""
                break
              default:
                type = "px"
                break
            }
            transform += `${transform ? " " : ""}${property}(${
              typeof transformValue === "function"
                ? transformValue()
                : transformValue
            }${type})`
          } else {
            transformProp[property] = transformValue
          }
        }
      })
      if (!inString && transformProp.opacity !== undefined) {
        transformProp.opacity = layoutConf.opacity
      }

      return inString ? transform : transformProp
    }

    /**
     * Returns value from % to px
     *
     * @param {*} str
     * @param {String} axis
     * @returns
     */
    function getValuePercentage(str, axis) {
      return typeof str === "string" && str.indexOf("%") !== -1
        ? (parseFloat(str) / 100) * dimentions[axis]
        : str
    }

    /**
     * Animation for title element
     *
     * @param {Boolean} show animate in or out
     */
    function animeTitle(show) {
      // Reset title opacity
      titleRef.current.style.opacity = show === true ? 0 : 1
      const options =
        show === true
          ? {
              opacity: 1,
              duration: 500,
            }
          : {
              opacity: 0,
              duration: 200,
            }
      anime({
        targets: titleRef.current,
        opacity: options.opacity,
        duration: options.duration,
        easing: "easeOutExpo",
      })
    }

    /**
     * Get the properties to reset the elements
     *
     * @param {Object} Layout reset options
     * @returns {Object} transfor and opacity properties
     */
    function getResetProps({ resetProps }) {
      return {
        transform: getAnimationProperties(resetProps, true),
        opacity: 0,
      }
    }

    /**
     * Get the properties for animejs
     *
     * @param {Object} Layout options
     * @returns {Object} Transform object
     */
    function getAnimeProps(layoutConf, items) {
      let properties = getAnimationProperties(layoutConf, false)
      properties = {
        targets: items,
        duration: layoutConf.duration,
        easing: layoutConf.easing,
        opacity: layoutConf.opacity,
        delay: (_el, index) =>
          direction === "next"
            ? index * layoutConf.itemsDelay
            : (items.length - 1 - index) * layoutConf.itemsDelay,
        ...properties,
      }

      return properties
    }

    function animeIn() {
      slideRef.current.style.opacity = 1
      const layoutConf = (layoutConfig[`layout${layout}`] || [])["in"]
      if (layoutConf) {
        // Reset before animating
        const resetTransform = getResetProps(layoutConf)
        // Elements to anime
        const items = imagesRef.current.map(item => {
          item.current.style.opacity = resetTransform.opacity
          item.current.style.transform = resetTransform.transform

          return item.current
        })
        const animeProps = getAnimeProps(layoutConf, items)
        // Delay In Animation
        animeInTimeout = setTimeout(() => {
          anime(animeProps)
        }, layoutConf.delay)
        animeTitle(true)
      }
    }

    function animeOut() {
      const layoutConf = (layoutConfig[`layout${layout}`] || [])["out"]
      if (layoutConf) {
        // Elements to anime
        const items = imagesRef.current.map(item => item.current)
        const animeProps = getAnimeProps(layoutConf, items)
        // After animation ends, hide container and enable navigation again
        animeProps["complete"] = () => {
          slideRef.current.style.opacity = 0
          onEndAnimating()
        }
        anime(animeProps)
        animeTitle(false)
      }
    }
    if (active && active !== prevActive) {
      animeIn()
    } else if (!active && prevActive !== undefined && active !== prevActive) {
      animeOut()
    }

    return () => {
      if (!active && animeInTimeout) {
        clearTimeout(animeInTimeout)
      }
    }
  }, [active, dimentions, direction, layout, onEndAnimating, prevActive, title])

  const slideCss = [styles.slide]
  if (styles[`slideLayout${layout}`]) {
    slideCss.push(styles[`slideLayout${layout}`])
  }
  const titleCss = [styles.slideTitle]
  if (active) {
    slideCss.push(styles.slideCurrent)
    titleCss.push(styles.slideCurrent)
  }

  return (
    <div
      css={slideCss}
      ref={slideRef}
      // If not active, hide from screen readers for accessibility
      aria-hidden={active}
    >
      <div css={styles.slideImgwrap}>
        {files.map(({ image }, index) => (
          <div key={index} className="slide-img">
            <div ref={imagesRef.current[index]} css={styles.animationContainer}>
              <Img
                className="slide-img-inner"
                fluid={image.childImageSharp.fluid}
                style={{ position: "absolute" }}
                objectPosition="top left"
                alt={title}
              />
              {caption && index === 4 && (
                <h4 css={styles.slideImgCaption}>{caption}</h4>
              )}
            </div>
          </div>
        ))}
      </div>
      <div css={titleCss} ref={titleRef}>
        <h3 css={styles.slideTitleMain}>{title}</h3>
        <p css={styles.slideTitleSub}>{description}</p>
      </div>
    </div>
  )
}

Slide.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
    }).isRequired
  ).isRequired,
  dimentions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  direction: PropTypes.string.isRequired,
  onEndAnimating: PropTypes.func.isRequired,
  caption: PropTypes.string,
}

export default Slide
