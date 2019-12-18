import React, { useState } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import Obfuscate from "react-obfuscate"
import Menu from "../../menu"
import styles from "./contact-me.css"

const LayoutContactMe = ({ children, bgClassName }) => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  function openContact() {
    setIsContactOpen(true)
  }

  function closeContact() {
    setIsContactOpen(false)
  }

  function contactButton() {
    return (
      <div css={styles.contactContactme}>
        <button
          css={[styles.btn, styles.btnContactme]}
          className="btn-contact-color"
          onClick={openContact}
          title="Contact me"
          data-test="contactme"
        >
          <svg className="icon">
            <use xlinkHref="#icon-contact"></use>
          </svg>
        </button>
      </div>
    )
  }

  function svgIcos() {
    return (
      <svg className="hidden">
        <defs>
          <symbol id="icon-contact" viewBox="0 0 483.3 483.3">
            <title>contact</title>
            <g>
              <g>
                <path
                  d="M424.3,57.75H59.1c-32.6,0-59.1,26.5-59.1,59.1v249.6c0,32.6,26.5,59.1,59.1,59.1h365.1c32.6,0,59.1-26.5,59.1-59.1
    v-249.5C483.4,84.35,456.9,57.75,424.3,57.75z M456.4,366.45c0,17.7-14.4,32.1-32.1,32.1H59.1c-17.7,0-32.1-14.4-32.1-32.1v-249.5
    c0-17.7,14.4-32.1,32.1-32.1h365.1c17.7,0,32.1,14.4,32.1,32.1v249.5H456.4z"
                />
                <path
                  d="M304.8,238.55l118.2-106c5.5-5,6-13.5,1-19.1c-5-5.5-13.5-6-19.1-1l-163,146.3l-31.8-28.4c-0.1-0.1-0.2-0.2-0.2-0.3
    c-0.7-0.7-1.4-1.3-2.2-1.9L78.3,112.35c-5.6-5-14.1-4.5-19.1,1.1c-5,5.6-4.5,14.1,1.1,19.1l119.6,106.9L60.8,350.95
    c-5.4,5.1-5.7,13.6-0.6,19.1c2.7,2.8,6.3,4.3,9.9,4.3c3.3,0,6.6-1.2,9.2-3.6l120.9-113.1l32.8,29.3c2.6,2.3,5.8,3.4,9,3.4
    c3.2,0,6.5-1.2,9-3.5l33.7-30.2l120.2,114.2c2.6,2.5,6,3.7,9.3,3.7c3.6,0,7.1-1.4,9.8-4.2c5.1-5.4,4.9-14-0.5-19.1L304.8,238.55z"
                />
              </g>
            </g>
          </symbol>
          <symbol id="icon-cross" viewBox="0 0 24 24">
            <title>cross</title>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </symbol>
          <symbol id="icon-github" viewBox="0 0 496 512">
            <title>github</title>
            <path
              fill="currentColor"
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            />
          </symbol>
          <symbol id="icon-twitter" viewBox="0 0 512 512">
            <title>twitter</title>
            <path
              fill="currentColor"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            />
          </symbol>
          <symbol id="icon-stackoverflow" viewBox="0 0 384 512">
            <title>stackoverflow</title>
            <path
              fill="currentColor"
              d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"
            />
          </symbol>
          <symbol id="icon-linkedin" viewBox="0 0 448 512">
            <title>linkedin</title>
            <path
              fill="currentColor"
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            />
          </symbol>
          <symbol id="icon-cv" viewBox="0 0 512 512">
            <title>cv</title>
            <path d="m220.814 268.591c11.357-10.699 26.21-16.591 41.824-16.591h97.362v-237c0-8.284-6.716-15-15-15h-330c-8.284 0-15 6.716-15 15v392c0 8.284 6.716 15 15 15h330c7.871 0 14.313-6.065 14.938-13.775-19.661-6.079-36.281-19.122-47-36.225h-50.938c-16.352 0-31.639-6.471-43.045-18.222-11.402-11.746-17.414-27.223-16.928-43.578.471-15.861 7.143-30.639 18.787-41.609zm-19.6-208.106c8.015-2.091 16.209 2.713 18.3 10.729l15.486 59.361 15.486-59.361c2.091-8.016 10.288-12.819 18.3-10.729 8.016 2.092 12.819 10.285 10.728 18.301l-30 115c-1.723 6.606-7.688 11.214-14.514 11.214s-12.791-4.608-14.514-11.214l-30-115c-2.091-8.015 2.712-16.209 10.728-18.301zm-121.214 34.515c0-19.299 15.701-35 35-35h20c19.299 0 35 15.701 35 35 0 8.284-6.716 15-15 15s-15-6.716-15-15c0-2.757-2.243-5-5-5h-20c-2.757 0-5 2.243-5 5v80c0 2.757 2.243 5 5 5h20c2.757 0 5-2.243 5-5 0-8.284 6.716-15 15-15s15 6.716 15 15c0 19.299-15.701 35-35 35h-20c-19.299 0-35-15.701-35-35zm85 295h-90c-8.284 0-15-6.716-15-15s6.716-15 15-15h90c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60h-90c-8.284 0-15-6.716-15-15s6.716-15 15-15h90c8.284 0 15 6.716 15 15s-6.716 15-15 15zm30-60h-120c-8.284 0-15-6.716-15-15s6.716-15 15-15h120c8.284 0 15 6.716 15 15s-6.716 15-15 15z" />
            <path d="m497 312h-48.787c-9.896 0-19.186-3.942-26.076-11.084-11.932-12.368-28.676-18.916-45.861-18.916h-113.638c-16.324 0-30.14 12.775-30.625 29.092-.503 16.954 13.143 30.908 29.987 30.908h70.096c6.547 23.057 27.777 40 52.904 40 1.765 0 3.452-.321 5.025-.881l-.025 25.881c0 15.934-8.332 29.95-20.86 37.948 8.043 10.21 12.86 23.075 12.86 37.052 0 10.925-2.949 21.167-8.072 30h1.859c17.598 0 34.412-7.066 46.896-19.47 6.786-6.742 15.962-10.53 25.531-10.53h48.786c8.284 0 15-6.716 15-15v-140c0-8.284-6.716-15-15-15z" />
            <path d="m322 452h-70c-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30h70c16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30z" />
          </symbol>
        </defs>
      </svg>
    )
  }

  function capitalize(s) {
    return typeof s === "string" ? `${s.charAt(0).toUpperCase}${s.slice()}` : ""
  }

  function contactContent(social, email) {
    return (
      <>
        {svgIcos()}
        <div className={`contact${isContactOpen ? " contactme-open" : ""}`}>
          <button
            css={[styles.btn, styles.blackPgColor]}
            className="btn-contactme-close"
            aria-label="Close contact me"
            title="Close contact me"
            data-test="contactmeClose"
            onClick={closeContact}
          >
            <svg className="icon">
              <use xlinkHref="#icon-cross" />
            </svg>
          </button>
          <div className="contactme-container">
            <div css={styles.contactMe}>
              Let's Make Something Great Together
            </div>
            <div className="contactme-info">
              <p>Get in touch with me on</p>
              <p>
                {Object.entries(social).map(([key, value]) => {
                  const links = {
                    gitHub: "https://github.com/",
                    twitter: "https://twitter.com/",
                    stackOverflow: "https://stackoverflow.com/users/",
                    linkedIn: "https://www.linkedin.com/",
                  }
                  let title
                  let ico
                  if (key !== "resumeInPdf") {
                    title = `${capitalize(key)} Account`
                    ico = key.toLocaleLowerCase()
                  } else {
                    title = "Download my CV"
                    ico = "cv"
                  }
                  return (
                    <a
                      key={value}
                      target="_blank"
                      href={`${links[key] || ""}${value}`}
                      css={styles.whiteLink}
                      rel="noopener noreferrer"
                      title={title}
                    >
                      <svg className="icon">
                        <use xlinkHref={`#icon-${ico}`}></use>
                      </svg>
                    </a>
                  )
                })}
              </p>
              <p>
                Or drop me an email at{" "}
                <Obfuscate
                  email={email}
                  headers={{
                    subject: "Come join us!",
                    body: "We want you in our team, we have pizza friday",
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Global
        styles={css`
          .tl-edges {
            max-width: 100%;
            overflow-x: inherit;
          }
        `}
      />
      <div
        css={styles.wrapper}
        className={`layout-wrapper ${bgClassName || "white"}`}
      >
        <StaticQuery
          query={graphql`
            {
              site {
                siteMetadata {
                  title
                  email
                  siteKeywords
                  siteDescription
                  social {
                    gitHub
                    twitter
                    stackOverflow
                    linkedIn
                    resumeInPdf
                  }
                }
              }
            }
          `}
          render={({
            site: {
              siteMetadata: {
                title,
                email,
                siteKeywords,
                siteDescription,
                social,
              },
            },
          }) => (
            <>
              <Helmet
                title={title}
                meta={[
                  {
                    name: "description",
                    content: siteDescription,
                  },
                  {
                    name: "keywords",
                    content: siteKeywords,
                  },
                  { charSet: "utf-8" },
                ]}
              >
                <html lang="en" />
              </Helmet>
              {contactContent(social, email)}
              <div className={`page${isContactOpen ? " page-move" : ""}`}>
                <div css={styles.pageTab} className="tab"></div>
                <div css={styles.pageTab} className="tab"></div>
                <div css={styles.pageTab} className="tab"></div>
                <div css={styles.mainContainer} className="tab">
                  <div className="layout-inner">
                    <div css={styles.layoutMagin}>
                      <Menu
                        bgClassName={bgClassName}
                        numPoints={18}
                        duration={600}
                        delayPointsMax={300}
                        delayPerPath={100}
                        fixedMenuPosition={false}
                      />
                      {contactButton()}
                    </div>
                    <div css={styles.pageContainer}>{children}</div>
                  </div>
                </div>
              </div>
            </>
          )}
        />
      </div>
    </>
  )
}

LayoutContactMe.propTypes = {
  children: PropTypes.node.isRequired,
  bgClassName: PropTypes.string,
}

export default LayoutContactMe
