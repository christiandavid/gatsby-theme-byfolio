const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")
const fs = require("fs")
const mkdirp = require("mkdirp")

/**
 * Remove the / from the beginning and the end of the sent path
 *
 * @param {String} path
 * @returns String return the path with / at the beginning
 */
const organizeSlash = path => {
  return path ? `/${path.replace(/^\/|\/$/g, "")}` : ""
}

// Initializing required directories
exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState()
  const dirs = [
    path.join(program.directory, "src/experience"),
    path.join(program.directory, "src/images"),
    path.join(program.directory, "src/utils"),
  ]
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`)
      mkdirp.sync(dir)
    }
  })
}

// Add the basePath to each theme page
exports.onCreatePage = ({ page, actions }, themeOptions) => {
  let { basePath } = themeOptions
  const components = [
    "ComponentAboutMe",
    "ComponentExperience",
    "ComponentIndex",
    "ComponentSkills",
  ]

  if (
    basePath &&
    /gatsby-theme-byfolio\/src\/pages/g.test(page.componentPath) &&
    components.includes(page.internalComponentName)
  ) {
    const { createPage, deletePage } = actions
    deletePage(page)

    basePath = organizeSlash(basePath)
    page.path = `${basePath}${page.path}`

    createPage({
      ...page,
    })
  }
}

exports.onCreateNode = ({ node, getNode, actions }, themeOptions) => {
  const { createNodeField } = actions
  let { basePath } = themeOptions
  basePath = organizeSlash(basePath)
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `${basePath}${slug}`,
    })
    // Adds Skills that you have on your own but hides them in work experience
    createNodeField({
      node,
      name: `hideOnExperience`,
      value: /\/_additionalSkills.*$/.test(node.fileAbsolutePath),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve(`./src/templates/job.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
