import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { jsx } from "@emotion/core"
import styles from "./layout.css"
import Menu from "../menu"

const Layout = ({
  title,
  children,
  bgClassName,
  fixedMenuPosition = false,
}) => {
  return (
    <div className={`layout-wrapper ${bgClassName || "white"}`}>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={title || data.site.siteMetadata.title}
              meta={[
                {
                  name: "description",
                  content:
                    "This cool page contains information about my work experience as a software developer",
                },
                {
                  name: "keywords",
                  content: "Software developer, Full Stack Developer",
                },
                { charSet: "utf-8" },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className="layout-inner">
              <div css={styles.layout}>
                <Menu
                  bgClassName={bgClassName}
                  numPoints={18}
                  duration={600}
                  delayPointsMax={300}
                  delayPerPath={100}
                  fixedMenuPosition={fixedMenuPosition}
                />
              </div>
              <div css={styles.pageContainer}>{children}</div>
            </div>
          </>
        )}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  bgClassName: PropTypes.string,
  fixedMenuPosition: PropTypes.bool,
}

export default Layout
