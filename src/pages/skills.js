import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default ({ transitionStatus }) => {
  let allSkills = []

  return (
    <Layout title={`Skills`} bgClassName={`skill`} fixedMenuPosition={true}>
      <Helmet>
        <title>Skills</title>
      </Helmet>
    </Layout>
  )
}
