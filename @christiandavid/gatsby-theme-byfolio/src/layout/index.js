import React from "react"
import { Global } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./layout.css"
import styleColors from "./layoutColors.css"

export default ({ children }) => {
  function svgIcos() {
    return (
      <svg className="hidden">
        <defs>
          <symbol id="icon-hand" viewBox="0 0 448 512">
            <title>hand</title>
            <path
              fill="currentColor"
              d="M408.781 128.007C386.356 127.578 368 146.36 368 168.79V256h-8V79.79c0-22.43-18.356-41.212-40.781-40.783C297.488 39.423 280 57.169 280 79v177h-8V40.79C272 18.36 253.644-.422 231.219.007 209.488.423 192 18.169 192 40v216h-8V80.79c0-22.43-18.356-41.212-40.781-40.783C121.488 40.423 104 58.169 104 80v235.992l-31.648-43.519c-12.993-17.866-38.009-21.817-55.877-8.823-17.865 12.994-21.815 38.01-8.822 55.877l125.601 172.705A48 48 0 0 0 172.073 512h197.59c22.274 0 41.622-15.324 46.724-37.006l26.508-112.66a192.011 192.011 0 0 0 5.104-43.975V168c.001-21.831-17.487-39.577-39.218-39.993z"
            />
          </symbol>
          <symbol id="icon-heart" viewBox="0 0 512 512">
            <title>heart</title>
            <path
              fill="currentColor"
              d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
            />
          </symbol>
        </defs>
      </svg>
    )
  }

  const siteQuery = graphql`
    {
      site {
        siteMetadata {
          footer
        }
      }
    }
  `
  const {
    site: {
      siteMetadata: { footer },
    },
  } = useStaticQuery(siteQuery)

  return (
    <>
      <div className="pgContainer">
        <div className="pgContent">
          <Global styles={[styles, styleColors]} />
          {children}
          {svgIcos()}
        </div>
        <div className="copy">
          <a
            href="https://github.com/christiandavid/gatsby-theme-byfolio"
            rel="noopener noreferrer"
            className="nolink"
            target="_blank"
          >
            {footer === "heart" ? (
              <>
                <div>Made with </div>
                <div>
                  <svg className="icon heart">
                    <use xlinkHref="#icon-heart"></use>
                  </svg>
                </div>
                <div> using GatsbyJS</div>
              </>
            ) : (
              <>
                <div>Developed with </div>
                <div>
                  <svg className="icon hand">
                    <use xlinkHref="#icon-hand"></use>
                  </svg>
                  <svg className="icon hand">
                    <use xlinkHref="#icon-hand"></use>
                  </svg>
                </div>
              </>
            )}
          </a>
        </div>
      </div>
      {/* This add a line in the bottom, but let Paint Drive Animation Work */}
      <span className="bgPageColor">.</span>
    </>
  )
}
