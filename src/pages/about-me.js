import React from "react"
import { Helmet } from "react-helmet"
import LayoutContactMe from "../components/layout/layout-contact-me"
import { jsx } from "@emotion/core"
import styles from "../css/aboutme.css"

export default () => {
  return (
    <LayoutContactMe>
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <section css={styles.aboutSection}>
        <div css={styles.aboutContainer}>
          <div css={styles.aboutContent}>
            <span css={styles.aboutShadow}>About me</span>
            <h2 css={styles.hTag}>About Me!</h2>
            <p>
              I'm a <strong>Software Developer</strong>, I finished my career on{" "}
              <strong>System Engineering</strong> in{" "}
              <strong>Francisco de Paula de Santander University</strong>. I am
              a pretty fast learner and always interested in learning new{" "}
              technologies. I put my efforts on learning the last trends on{" "}
              Development, and strive to better myself as a developer. I think{" "}
              one of my values is the ability to resolve problems so from the{" "}
              beginning I've been always focused on solving algorithms no matter{" "}
              the languages I used. I like to integrate systems using and{" "}
              creating RESTFul Apis.
            </p>
            <h2 css={styles.hTag}>Experience!</h2>
            <p>
              I started developing software from <strong>2004</strong> working{" "}
              in several companies, I worked creating modules for{" "}
              <strong>"Joomla"</strong> since it was <strong>"Mambo"</strong>,{" "}
              then I developed mailing software. I came from hundreds to{" "}
              thousands of emails in a few weeks. It was a moment when it was
              easy to end blocked for being considered as "spammer" but I found
              many workarounds and implemented several techniques to make all
              this amount of emails were delivered on the inbox. It was a big
              quest but in the end, the client was more than satisfied. After
              all these experience I built a <strong>CRM</strong> for{" "}
              <strong>ACEF</strong>, the system was in charge of all the{" "}
              commercial management and it was a way to control 'sensitive'{" "}
              information. "It was so important to make it from scratch and not{" "}
              to use an application". I have also worked with{" "}
              <strong>WordPress</strong>,{" "}
              <strong>Magento CE and Magento EE</strong>, I've been involved in{" "}
              the <strong>real estate platforms development</strong>, being part{" "}
              in all stages of the project, from basic ideas, structuring,{" "}
              wireframing and development to the stages of creating an
              open-source <strong>API</strong> so external developers could
              inject their own data. I've worked in developing algorithms to
              process images and PDF files. I've worked with the{" "}
              <strong>RED5</strong> platform for streaming audio and video. On
              the mobile side, I have experience with iOS development with{" "}
              <strong>Objective C</strong>, I've also worked with dating
              scripts. Making integration with{" "}
              <strong>payment platforms</strong> as <strong>ADYEN</strong> or{" "}
              <strong>PayPal</strong>, adding modules to be used by marketing{" "}
              areas. Analyzing data from different amounts of profiles and{" "}
              process it to display a different kinds of campaigns and
              promotional stuff. In the last years, I've been working on{" "}
              <strong>NodeJS</strong> and all the <strong>Javascript</strong>{" "}
              environments.
            </p>
          </div>
        </div>
      </section>
    </LayoutContactMe>
  )
}
