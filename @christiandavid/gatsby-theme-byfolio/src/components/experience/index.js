import React, { useState, useRef, createRef } from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import { useMQResize } from "../hooks"
import Delay from "../delay"
import isSSR from "../../utils/isSSR"
import styles from "./experience.css"

const mediaQueries = {
  min52: "(min-width: 52.5em)",
  max36: "(max-width: 36em)",
}
const textLimit = 15

const Experience = ({
  jobs,
  title,
  description,
  showLoadingAnimation = true,
  transitionStatus = "entered",
}) => {
  const [loaded, setLoaded] = useState(false)
  const gridRef = useRef(null)
  const matchPoints = useMQResize(mediaQueries)
  const jobItems = useRef(jobs.map(createRef))

  if (loaded && !isSSR) {
    // It's mandatory to specify the height when using flex column
    const defaultMinMargin = 9999
    let itemsHeight = 0
    let maxMarginTop = 0
    let minMarginTop = defaultMinMargin

    for (let item of jobItems.current) {
      // Get margin top and Bottom size to add it to the height later
      const styles = window.getComputedStyle(item.current)
      const marginTop = parseFloat(styles["marginTop"], 10)

      if (marginTop) {
        if (marginTop > maxMarginTop) {
          maxMarginTop = marginTop
        }
        if (marginTop < minMarginTop) {
          minMarginTop = marginTop
        }
      }

      itemsHeight += item.current
        ? item.current.offsetHeight + parseFloat(styles["marginBottom"], 10)
        : parseFloat(styles["marginBottom"], 10)
    }
    minMarginTop = minMarginTop === defaultMinMargin ? 1 : minMarginTop
    if (itemsHeight) {
      // Media queries specified in CSS; The size change by the amount of columns,
      // each column and media query has different margin top and bottom
      if (!matchPoints.max36 && !matchPoints.min52) {
        itemsHeight += jobs.length * minMarginTop
        itemsHeight /= 2
      } else if (matchPoints.min52) {
        itemsHeight += jobs.length * minMarginTop
        itemsHeight /= 3
        itemsHeight += maxMarginTop
      } else {
        itemsHeight += jobs.length * minMarginTop + maxMarginTop
      }
      gridRef.current.style.height = `${Math.ceil(itemsHeight)}px`
    }
  }

  function handleLoad() {
    setLoaded(true)
  }

  function getJobs() {
    let currentYear

    return jobs.map(
      (
        {
          node: {
            id,
            fields: { slug },
            frontmatter: { company, logo, jobTitle, dateFrom, dateTo: dateEnd },
          },
        },
        index
      ) => {
        const dateTo = dateEnd || dateFrom
        const years = dateFrom === dateTo ? dateFrom : `${dateFrom} - ${dateTo}`
        let showYear = false
        if (index % 2 === 0) {
          showYear = true
          currentYear = dateTo
        }

        return (
          <div
            key={id}
            css={styles.job}
            ref={jobItems.current[index]}
            {...(showYear && { "data-year": currentYear })}
          >
            <AniLink
              cover
              to={slug}
              css={styles.link}
              direction="left"
              bg="#282b2f"
            >
              <Img
                css={styles.img}
                fluid={logo.childImageSharp.fluid}
                alt={company}
              />
              <span css={styles.year}>{years}</span>
              <h2 css={styles.company}>
                {company.length >= textLimit
                  ? `${company.substring(0, textLimit)}...`
                  : company}
              </h2>
              <h3 css={styles.position}>{jobTitle}</h3>
            </AniLink>
          </div>
        )
      }
    )
  }

  return (
    <main css={styles.experience}>
      <header css={styles.header}>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      {/* TODO: Find a workaround for this */}
      {/* It appears that AniLink causes the page to render many times */}
      {/* {transitionStatus === "exited" ? ( */}
      <Delay
        wait={1000}
        cb={handleLoad}
        showLoadingAnimation={showLoadingAnimation}
      >
        <div css={styles.grid} data-test="jobs" ref={gridRef}>
          {getJobs()}
        </div>
      </Delay>
      {/* ) : (
        <div css={styles.grid}>{getJobs()}</div>
      )} */}
    </main>
  )
}

Experience.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }).isRequired,
        frontmatter: PropTypes.shape({
          company: PropTypes.string.isRequired,
          logo: PropTypes.object.isRequired,
          jobTitle: PropTypes.string.isRequired,
          dateFrom: PropTypes.string.isRequired,
          dateTo: PropTypes.string,
        }).isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showLoadingAnimation: PropTypes.bool,
  transitionStatus: PropTypes.string,
}

export default Experience
