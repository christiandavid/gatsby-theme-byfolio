# gatsby-theme-byfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/christiandavid/gatsby-theme-byfolio/blob/dev/LICENSE)
[![CircleCI](https://circleci.com/gh/christiandavid/gatsby-theme-byfolio.svg?style=svg)](https://circleci.com/gh/christiandavid/gatsby-theme-byfolio)
![Twitter Follow](https://img.shields.io/twitter/follow/iChristianDavid?style=social)

Initially this was a personal portfolio made in GatsbyJs, now it's a Gatsby theme available to anyone who wants to tell their work history focusing only on the content.

![Gatsby Portfolio](https://raw.githubusercontent.com/christiandavid/gatsby-theme-byfolio/dev/readme-files/Byfolio.jpg)

![Portfolio](https://raw.githubusercontent.com/christiandavid/gatsby-theme-byfolio/dev/readme-files/portfolio.gif)

- [Installation](#installation)
- [Configuration](#configuration)
- [Adding experience and skills](#adding-experience-and-skills)
- [Skills](#skills)
- [Component shadowing](#component-shadowing)
- [Examples](#examples)
- [Authors](#authors)
- [Credits](#credits)

## Installation

```sh
mkdir portfolio && cd portfolio
yarn init -y
yarn add react react-dom gatsby @christiandavid/gatsby-theme-byfolio
```

Create gatsby-config.js file and load the plugin

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
    },
  ],
}
```

```sh
gatsby develop
```

In your brower load [localhost:8000](http://localhost:8000/)

## Configuration

After each modification in gatsby-config.js it is necessary to restart the site from the terminal.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `Portfolio`,
        siteUrl: `https://www.christianibarguen.com`,
        siteName: `Christian David Ibarguen`,
        siteShortName: `CD`,
        siteDescription: `This cool App contains information about my work experience as a software developer.`,
        siteKeywords: `Software developer, Full Stack Developer`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#000`, link: `` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#3a3d98`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
        ],
        email: `christian@davidibarguen.com`,
        social: {
          // Usernames
          twitter: `ichristiandavid`,
          gitHub: `christiandavid`,
          stackOverflow: `967956/christian-david`,
          linkedIn: `in/christianibarguen/`,
          resumeInPdf: `/CV-19.pdf`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hi!, I'm Christian David Ibarguen`,
          h2Text: `I'm a Full Stack Developer who loves working in Backend, I have
              worked as a software developer since 2006.`,
          typewriter: [
            `Coding is my passion 😎`,
            `I'm a 🍕 lover`,
            `I'm a pretty fast learner and always interested in learning new technologies 🤓`,
            `I think one of my values is the <strong>ability to resolve problems<strong>`,
            `I like to share what I know 👨‍🏫`,
            `In my non-coding hours, I'm at the 🏋‍`,
            `I also do design and UX work <span style='color: #27ae60;'>occasionally</span>`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#171616", hover: "#fff" },
          shape1: {
            color: `#413f46`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
  ],
}
```

| Option name     | Type    | Description                                                                                                                           |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| basePath        | string  | Where should the site be served from? /porfolio will change all paths to start with /porfolio                                         |
| path            | string  | Place where the files are stored, for example: `src/`                                                                                 |
| imagesPath      | string  | Place where the images files are stored, for example: `src/images/`                                                                   |
| iconFile        | string  | Provides the icon path for the gatsby-plugin-manifest plugin                                                                          |
| typographyPath  | string  | Place where the file that defines your website’s typography configuration is located                                                  |
| siteTitle       | string  | The main title for the website, used in the `<title>` element                                                                         |
| siteUrl         | string  | The portfolio url, example: `https://christianibarguen.com`                                                                           |
| siteName        | string  | Represents the name of the web application as it is usually displayed to the user                                                     |
| siteShortName   | string  | Represents a short version of the name of the web application                                                                         |
| siteDescription | string  | Allows you to describe the purpose of the web application                                                                             |
| siteKeywords    | string  | Keywords for the page                                                                                                                 |
| useMozJpeg      | boolean | MozJPEG provides better image compression than the default encoder used in gatsby-plugin-sharp.                                       |
| menuLinks       | array   | An array of objects for the menu, each item represents a link, color represents the color that the animation shows when it is pressed |
| email           | string  | Email for contact, this is displayed when the Contact Me button is pressed                                                            |
| social          | object  | An Object with the user accounts of: twitter, gitHub, stackOverflow, linkedIn and `resumeInPdf` resume link                           |
| homePage        | object  | An object with information of titles, texts with animated description, and animation to show if you are available to be hired         |
| shapeColor      | object  | Represents the colors used in the menu animation, in total there are 3 in which you can specify the color and the opacity             |
| footer          | string  | Text to show in the footer only has 2 options: `heart`or `hand`                                                                       |

## Adding experience and skills

This theme generates pages based on Markdown files in the `path`/experience directory. Your Markdown files should contain some frontmatter defining their company, logo, etc.
All company logos must be relative to `imagesPath`/companies directory.
All Skills logos must be relative to `imagesPath`/skills directory.
All layout images must be relative to company directory, for example: `imagesPath`/companies/vlooping

### Important

For each Skill you must add the logo of the Framework, library or program, with a resolution of **width: 500px, height: 500px**, in the src/images/skills/ directory I leave several logos, **only Skills logos that I own are present, if the logo you need does not appear you must create it**.

Layout number is for image animation you can select from 1 to 5, **please do not forget to add the images "images/companies/vlooping.png, images/skills/html5.png, images/skills/react.png, images/companies/vlooping/vlooping.png" to run the following example**

```yaml
---
title: ""
company: "Company Name"
logo: ../images/companies/vlooping.png
jobTitle: "My job position"
skills:
  [
    { title: "HTML 5", image: ../images/skills/html5.png },
    { title: "HTML 5", image: ../images/skills/react.png },
  ]
images:
  [
    {
      title: "Layout 4",
      description: "Description text for layout 4.",
      layout: "4",
      files:
        [
          { image: ../images/companies/vlooping/vlooping.png },
          { image: ../images/companies/vlooping/vlooping.png },
          { image: ../images/companies/vlooping/vlooping.png },
        ],
    },
    {
      title: "Layout 1",
      description: "Description text for layout 1.",
      layout: "1",
      files:
        [
          { image: ../images/companies/vlooping/vlooping.png },
          { image: ../images/companies/vlooping/vlooping.png },
          { image: ../images/companies/vlooping/vlooping.png },
        ],
    },
    {
      title: "Layout 2",
      description: "Description text for layout 2.",
      layout: "2",
      files:
        [
          { image: ../images/companies/vlooping/vlooping.png },
          { image: ../images/companies/vlooping/vlooping.png },
          { image: ../images/companies/vlooping/vlooping.png },
          { image: ../images/companies/vlooping/vlooping.png },
          { image: ../images/companies/vlooping/vlooping.png },
        ],
      caption: "New Message",
    },
    {
      title: "Layout 3",
      description: "Description text for layout 1.",
      layout: "3",
      files:
        [
          { image: ../images/companies/vlooping/vlooping.png },
          { image: ../images/companies/vlooping/vlooping.png },
          { image: ../images/companies/vlooping/vlooping.png },
          { image: ../images/companies/vlooping/vlooping.png },
        ],
    },
    {
      title: "Layout 5",
      description: "Description text for layout 5.",
      layout: "5",
      files:
        [
          { image: ../images/companies/vlooping/vlooping.png },
          { image: ../images/companies/vlooping/vlooping.png },
          { image: ../images/companies/vlooping/vlooping.png },
        ],
    },
  ]
dateFrom: "2015-12-01"
dateTo: "2019-12-01"
---
- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
- Contrary to popular belief, Lorem Ipsum is not simply random text
- It is a long established fact that a reader will be distracted by the readable content of a page
- There are many variations of passages of Lorem Ipsum available
- The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
```

### Skills

The Skills are automatically selected from experience, in case some skill you acquired does not correspond to a company you can add it in `path`/experience/\_additionalSkills.md

```yaml
---
title: ""
company: ""
jobTitle: ""
logo:
skills:
  [
    { title: "React", image: ../images/skills/react.png },
    { title: "React Native", image: ../images/skills/react-native.png },
    { title: "Gatsby", image: ../images/skills/gatsby.png },
    { title: "GraphQL", image: ../images/skills/graphql.png },
    { title: "Redux", image: ../images/skills/redux.png },
    { title: "Apollo GraphQL", image: ../images/skills/apollo.png },
    { title: "Socket.io", image: ../images/skills/socket-io.png },
  ]
images: []
dateFrom: "2019-09-01"
dateTo: "2019-09-01"
---

```

## Component shadowing

You can customize elements like the css style or about-me content by taking advantage of [component shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/).

I recommend using [Coolors.co](https://coolors.co/) to select a color palette and adapt it to your new portfolio.

You can change the color of the text and the background of each page, for example:

```js
// src/@christiandavid/gatsby-theme-byfolio/layout/layoutColors.css.js
import { css } from "@emotion/core"
import lineSvg from "../../../static/assets/line.svg"

const styles = css`
  .e404.layout-wrapper .layout-inner {
    background: #fff;
  }
  .e404 .data-section {
    color: #000;
  }
  .aboutme.layout-wrapper .layout-inner {
    background: #fff;
  }
  .aboutme .data-section {
    color: #000;
  }
  .aboutme .hamburgercolr::before,
  .aboutme .hamburgercolr::after,
  .e404 .hamburgercolr::before,
  .e404 .hamburgercolr::after {
    background-color: #000;
  }
  .home.layout-wrapper .layout-inner {
    background: #0e0f11;
    background: #0e0f11 url(${lineSvg}) center center fixed;
    background-size: contain;
  }
  .home.layout-wrapper h1,
  .home.layout-wrapper h2 {
    color: #fff;
  }
  .skill.layout-wrapper .layout-inner {
    color: #fff;
    background: #9d316e;
    background: url(${lineSvg}) center center fixed, linear-gradient(
        45deg,
        #9d316e,
        #de2d3e
      );
    background-size: cover;
  }
  .experience.layout-wrapper .layout-inner {
    background: #3a3d98;
    background: url(${lineSvg}) center center fixed, linear-gradient(
        45deg,
        #6f22b9,
        #3a3d98
      );
    background-size: cover;
  }
  .home .hamburgercolr::before,
  .home .hamburgercolr::after,
  .skill .hamburgercolr::before,
  .skill .hamburgercolr::after,
  .experience .hamburgercolr::before,
  .experience .hamburgercolr::after {
    background-color: #fff;
  }
  .home .btn-contact-color,
  .experience .btn-contact-color {
    color: #fff;
  }
  .aboutme .btn-contact-color,
  .e404 .btn-contact-color {
    color: #000;
  }
`

export default styles
```

You can change the about-me text in the "src/@christiandavid/gatsby-theme-byfolio/contentJSON/about-me.json" file, for example:

```json
[
  {
    "subtitle": "About Me!",
    "content": "I'm a <strong>Software Developer</strong>"
  },
  {
    "subtitle": "Experience!",
    "content": "I started developing software from <strong>2004</strong> working in several companies"
  }
]
```

## Examples

- [My Portfolio](https://christianibarguen.com)

Are you using this theme in your own project? Submit a PR with your website added to this list!

## Authors

- **Christian David Ibarguen R**

## Credits

Special thanks to:

- [GatsbyJs](https://www.gatsbyjs.org/)
- [Codrops](https://tympanus.net/codrops/)
- [Fontawesome](https://fontawesome.com/license)
