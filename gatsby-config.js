/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.christianibarguen.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Christian David Ibarguen`,
        short_name: `CD`,
        description: `This cool App contains information about my work experience as a software developer.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/layout`),
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-151335375-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true,
          cookie_name: "christianibarguen.com",
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        // color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/experience/_additionalSkills`],
      },
    },
  ],
}
