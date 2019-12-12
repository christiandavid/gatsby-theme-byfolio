import React, { useLayoutEffect } from "react"
import { graphql, navigate } from "gatsby"
import { Helmet } from "react-helmet"
import styles from "./job.css"
import Slideshow from "../components/Slideshow"
import Skill from "../components/skill"

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
      <Slideshow images={post.frontmatter.images}>
        <div css={styles.jobtitle}>
          <div css={styles.jobtitleContent} data-test="content">
            <h1>{post.frontmatter.company}</h1>
            <h3>
              {post.frontmatter.jobTitle}, {post.frontmatter.dateFrom}{" "}
              {post.frontmatter.dateTo
                ? ` to ${post.frontmatter.dateTo}`
                : " Present"}
            </h3>
          </div>
        </div>
        <div
          css={styles.contentText}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Slideshow>
      <Skill
        skills={post.frontmatter.skills}
        type="static"
        title="Tools used"
        style={{ overflow: "hidden", backgroundColor: "#fff" }}
        showLoadingAnimation={false}
        description="The list of tools used here corresponds to the Languages, Frameworks,
        Libraries or Apps that I used in each of the roles performed."
      />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, hideOnExperience: { eq: false } }
    ) {
      html
      frontmatter {
        company
        jobTitle
        dateFrom(formatString: "MMM YYYY")
        dateTo(formatString: "MMM YYYY")
        images {
          title
          description
          layout
          caption
          files {
            image {
              childImageSharp {
                fluid(maxWidth: 1100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        skills {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
