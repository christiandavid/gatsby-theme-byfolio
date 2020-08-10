import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useWnResize } from "../hooks"
import Slide from "./Slide"
import styles from "./slideshow.css"

const Slideshow = ({ images, children }) => {
  const slideshow = useRef()
  const dimentions = useWnResize(slideshow, 10)
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState("next")
  const slidesTotal = images.length - 1

  // Enable Navigation
  function onEndAnimating() {
    setIsAnimating(false)
  }

  function goToNext() {
    if (!isAnimating) {
      setIsAnimating(true)
      setDirection("next")
      setCurrent(current < slidesTotal ? current + 1 : 0)
    }
  }

  function goToPrevious() {
    if (!isAnimating) {
      setIsAnimating(true)
      setDirection("previous")
      setCurrent(current > 0 ? current - 1 : slidesTotal)
    }
  }

  function getSlides() {
    return (
      dimentions &&
      images.map((item, index) => (
        <Slide
          {...item}
          active={current === index}
          key={item.title}
          dimentions={dimentions}
          direction={direction}
          onEndAnimating={onEndAnimating}
        />
      ))
    )
  }

  function svgIcos() {
    return (
      <svg className="hidden">
        <defs>
          <symbol id="icon-prev" viewBox="0 0 100 50">
            <title>prev</title>
            <polygon points="5.4,25 18.7,38.2 22.6,34.2 16.2,27.8 94.6,27.8 94.6,22.2 16.2,22.2 22.6,15.8 18.7,11.8" />
          </symbol>
          <symbol id="icon-next" viewBox="0 0 100 50">
            <title>next</title>
            <polygon points="81.3,11.8 77.4,15.8 83.8,22.2 5.4,22.2 5.4,27.8 83.8,27.8 77.4,34.2 81.3,38.2 94.6,25 " />
          </symbol>
          <symbol id="icon-arrowback" viewBox="0 0 24 24">
            <title>arrow-back</title>
            <path d="M7.839 17.296a.847.847 0 0 0 1.21 0 .853.853 0 0 0 0-1.198L2.914 9.965h20.238A.843.843 0 0 0 24 9.118a.852.852 0 0 0-.847-.86H2.915l6.133-6.12a.868.868 0 0 0 0-1.21.847.847 0 0 0-1.21 0L.255 8.513a.833.833 0 0 0 0 1.197l7.585 7.586z" />
          </symbol>
          <clippath
            id="polygon-clip-rhomboid"
            clipPathUnits="objectBoundingBox"
          >
            <polygon points="0 1, 0.3 0, 1 0, 0.7 1" />
          </clippath>
        </defs>
      </svg>
    )
  }

  const siteQuery = graphql`
    {
      site {
        siteMetadata {
          basePath
          menuLinks {
            color
            name
          }
        }
      }
    }
  `
  const {
    site: {
      siteMetadata: { basePath, menuLinks },
    },
  } = useStaticQuery(siteQuery)

  const experienceLink = menuLinks.find(({ name }) => name === "experience")
  const bgColor = experienceLink ? experienceLink.color : "#3a3d98"

  return (
    <>
      <Helmet
        link={[
          {
            href: "https://fonts.googleapis.com/css?family=Gochi+Hand",
            rel: "stylesheet",
          },
        ]}
      ></Helmet>
      <section>
        {svgIcos()}
        <main css={styles.job}>
          <header>
            <AniLink
              cover
              to={`${basePath}/experience`}
              css={styles.arrowBack}
              direction="right"
              data-test="goback"
              bg={bgColor}
              style={{ opacity: 1 }}
            >
              <svg css={styles.iconJob}>
                <use xlinkHref="#icon-arrowback"></use>
              </svg>
            </AniLink>
          </header>
          <div css={styles.slideshow} data-test="slideshow" ref={slideshow}>
            {getSlides()}
            {!!slidesTotal && (
              <nav css={styles.slideshowNav}>
                <button
                  onClick={goToPrevious}
                  css={styles.btnjob}
                  aria-label="Previous slide"
                  data-test="previous"
                >
                  <svg className="icon">
                    <use xlinkHref="#icon-prev"></use>
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  css={styles.btnjob}
                  aria-label="Next slide"
                  data-test="next"
                >
                  <svg className="icon">
                    <use xlinkHref="#icon-next"></use>
                  </svg>
                </button>
              </nav>
            )}
            <div css={styles.gradient}></div>
          </div>
          {children}
        </main>
      </section>
    </>
  )
}

Slideshow.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      layout: PropTypes.string.isRequired,
      files: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.object.isRequired,
        }).isRequired
      ).isRequired,
      caption: PropTypes.string,
    }).isRequired
  ).isRequired,
  children: PropTypes.node.isRequired,
}

export default Slideshow

// Inspired by https://github.com/codrops/MultiLayoutSlideshow/
