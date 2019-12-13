import React, { useEffect, useRef } from "react"
import { Helmet } from "react-helmet"
import Typewriter from "typewriter-effect"
import GraphemeSplitter from "grapheme-splitter"
import { jsx } from "@emotion/core"
import anime from "animejs"
import LayoutContactMe from "../components/layout/layout-contact-me"
import styles from "../css/home.css"

export default () => {
  const dotAnimation = useRef()
  function stringSplitter(string) {
    const splitter = new GraphemeSplitter()
    return splitter.splitGraphemes(string)
  }

  useEffect(() => {
    const dotEl = dotAnimation.current
    anime({
      targets: dotEl,
      endDelay: 800,
      easing: "easeInOutQuad",
      direction: "alternate",
      background: "#6CC551",
      loop: true,
    })

    return () => anime.remove(dotEl)
  })

  return (
    <LayoutContactMe bgClassName="black">
      <Helmet>
        <title>Christian David Ibarguen</title>
        <meta charset="UTF-8" />
      </Helmet>
      <section css={styles.dataSection}>
        <div css={styles.dataContainer}>
          <div css={styles.dataContent}>
            <div css={styles.dataTopbar}>
              <div css={styles.dot} ref={dotAnimation}></div>
              <p>Available to be hired</p>
            </div>
            <h1>Hi!, I'm Christian David Ibarguen</h1>
            <h2>
              I'm a Full Stack Developer who loves working in Backend, I have
              worked as a software developer since 2006.
            </h2>
            <Typewriter
              css={styles.typewriter}
              options={{
                strings: [
                  "Coding is my passion 😎",
                  "I'm a 🍕 lover",
                  "I'm a pretty fast learner and always interested in learning new technologies 🤓",
                  "I think one of my values is the <strong>ability to resolve problems<strong>",
                  "I like to share what I know 👨‍🏫",
                  "In my non-coding hours, I'm at the 🏋‍",
                  "I also do design and UX work <span style='color: #27ae60;'>occasionally</span>",
                ],
                autoStart: true,
                loop: true,
                delay: 55,
                stringSplitter,
              }}
            />
          </div>
        </div>
      </section>
    </LayoutContactMe>
  )
}
