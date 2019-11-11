import React, { useState, useRef, createRef, useEffect } from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import { jsx } from "@emotion/core"
import Delay from "../delay"
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
  const jobItems = useRef(jobs.map(createRef))

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
            frontmatter: { company, logo, jobTitle, dateFrom, dateTo },
          },
        },
        index
      ) => {
        const years = dateFrom === dateTo ? dateFrom : `${dateFrom} - ${dateTo}`
        let addYear = false
        if (dateTo.slice(-1) % 3 === 0) {
          if (currentYear != dateTo) {
            addYear = true
          }
          currentYear = dateTo
        }

        return (
          <div
            key={id}
            css={styles.job}
            ref={jobItems.current[index]}
            {...(addYear && { "data-year": currentYear })}
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
        <div css={styles.grid} ref={gridRef}>
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
          dateTo: PropTypes.string.isRequired,
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
