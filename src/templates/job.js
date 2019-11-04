import React, { useLayoutEffect } from "react"
import { graphql, navigate } from "gatsby"
import { Helmet } from "react-helmet"
import { jsx } from "@emotion/core"
import styles from "./job.css"

export default ({ data }) => {
  const post = data.markdownRemark
  useLayoutEffect(() => {
    if (!post) {
      navigate("/404")
      return <></>
    }
  }, [post])

  return !post ? (
    <></>
  ) : (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {post.frontmatter.jobTitle} on {post.frontmatter.company}
        </title>
      </Helmet>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug, ne: "/experience/_additionalSkills/" } }
    ) {
      html
      frontmatter {
        company
        jobTitle
        dateFrom(formatString: "MMM YYYY")
        dateTo(formatString: "MMM YYYY")
      }
    }
  }
`
