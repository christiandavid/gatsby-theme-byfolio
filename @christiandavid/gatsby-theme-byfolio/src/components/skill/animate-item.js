import React, { useEffect, useRef, createRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import anime from "animejs"
import styles from "./skills.css"

function AnimateItem({ type, title, image }) {
  const imgArray = Array(4).fill("")
  const ref = useRef(null)
  const imageRef = useRef()
  const imagesRef = useRef(imgArray.map(createRef))

  useEffect(() => {
    /**
     * Run the animation on the child tags
     *
     * @param {*} e
     * @param {*} callback "Animation to run"
     * @param {boolean} [mEnter=true]
     */
    function animateItems(e, callback, mEnter = true) {
      const { target } = e
      if (mEnter) {
        target.style.zIndex = 2
      }
      if (type === "static") {
        for (let item of imagesRef.current) {
          callback(item.current)
        }
      } else {
        callback(imageRef.current)
      }
    }

    function handleMouseEnter(e) {
      // Set animation
      animateItems(e, item => {
        anime.remove(item)
        type === "static"
          ? anime({
              targets: item,
              translateX: () => {
                return anime.random(-60, 60)
              },
              translateY: () => {
                return anime.random(-60, 60)
              },
              rotateZ: () => {
                return anime.random(-10, 10)
              },
              duration: 1000,
              easing: "cubicBezier(.2, 1, .2, 1)",
              delay: 20,
            })
          : anime({
              targets: item,
              translateX: -50,
              translateY: -50,
            })
      })
    }

    function handleMouseLeave(e) {
      animateItems(
        e,
        item => {
          anime.remove(item)
          anime({
            targets: item,
            translateX: 0,
            translateY: 0,
            rotateZ: 0,
            duration: 400,
            easing:
              type === "static" ? "easeInOutExpo" : "easeOutElastic(1, .5)",
            complete: () => {
              e.target.style.zIndex = 1
            },
          })
        },
        false
      )
    }

    const node = ref.current
    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter)
      node.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter)
        node.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [type])

  return (
    <li
      css={type === "static" ? styles.gridItemStatic : styles.gridItem}
      ref={ref}
    >
      <div css={styles.gridImgContainer}>
        {type === "static" ? (
          imgArray.map((_item, index) => (
            <div
              css={styles.gridImgStatic}
              key={`anImg${index}`}
              ref={imagesRef.current[index]}
              style={
                index !== 0
                  ? {
                      position: "absolute",
                      overflow: "visible",
                    }
                  : {
                      overflow: "visible",
                    }
              }
            >
              <Img fluid={image.childImageSharp.fluid} alt={title} />
            </div>
          ))
        ) : (
          <>
            <div css={styles.gridImg} ref={imageRef}>
              <Img
                fluid={image.childImageSharp.fluid}
                style={{
                  overflow: "visible",
                }}
                alt={title}
              />
            </div>
            <span css={styles.gridTitle}>{title}</span>
          </>
        )}
      </div>
    </li>
  )
}
AnimateItem.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default AnimateItem
