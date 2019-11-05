import React from "react"
import { Helmet } from "react-helmet"
import LayoutContactMe from "../components/layout/layout-contact-me"
import { jsx } from "@emotion/core"
import styles from "../css/home.css"

export default () => {
  return (
    <LayoutContactMe>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <section css={[styles.dataSection, styles.blackColor]}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent}>
            <h1>Page not found</h1>
            <h2>
              Oops! The page you are looking for has been removed o relocated.
            </h2>
            <a href="/">Go to Home</a>
          </div>
        </div>
      </section>
    </LayoutContactMe>
  )
}
