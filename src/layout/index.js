import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { rhythm } from "../utils/typography"
import Menu from "../components/menu"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        padding: ${rhythm(2)};
        padding-top: ${rhythm(3.5)};
      `}
    >
      <Menu
        numPoints={18}
        duration={600}
        delayPointsMax={300}
        delayPerPath={100}
      />
      <AniLink cover to="/" direction="right" bg="#000">
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </AniLink>
      <div
        css={css`
          position: relative;
          z-index: 0;
        `}
      >
        {children}
      </div>
    </div>
  )
}
