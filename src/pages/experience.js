import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import LayoutContactMe from "../components/layout/layout-contact-me"

export default ({ transitionStatus }) => {
  return (
    <LayoutContactMe bgClassName="experience">
      <Helmet>
        <title>Work Experience</title>
      </Helmet>
    </LayoutContactMe>
  )
}
