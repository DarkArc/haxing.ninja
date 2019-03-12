const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        blogPosts: allMarkdownRemark(
          filter: { fields: { collection: { eq: "posts" } } },
          sort: {fields: [frontmatter___date], order: DESC},
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        genericProjects: allMarkdownRemark(
          filter: { fields: { collection: { eq: "projects" } }, fileAbsolutePath: {regex : "\/generic/"} },
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        },
        githubProjects: allMarkdownRemark(
          filter: { fields: { collection: { eq: "projects" } }, fileAbsolutePath: {regex : "\/github/"} },
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    const posts = result.data.blogPosts.edges
    posts.forEach((post, index) => {
      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug
        }
      })
    })

    const genericProject = path.resolve(`./src/templates/generic-project.js`)
    const genericProjects = result.data.genericProjects.edges
    genericProjects.forEach((project, index) => {
      createPage({
        path: project.node.fields.slug,
        component: genericProject,
        context: {
          slug: project.node.fields.slug
        }
      })
    })

    const githubProject = path.resolve(`./src/templates/github-project.js`)
    const githubProjects = result.data.githubProjects.edges
    githubProjects.forEach((project, index) => {
      createPage({
        path: project.node.fields.slug,
        component: githubProject,
        context: {
          slug: project.node.fields.slug
        }
      })
    })

    return null
  })
}

let createBaseSlug = (node, sourceInstanceName, defaultPath) => {
  let disassembled = defaultPath.split(`/`).slice(1)

  if (sourceInstanceName == `projects`) {
    // Pop the project category from the path
    return disassembled.slice(1).join(`/`)
  }

  if (sourceInstanceName == `posts`) {
    // Add the posting date to the path
    let dateOfPosting = new Date(node.frontmatter.date)
    let dateYYYYMMDDFormat = dateOfPosting.toISOString().split('T')[0]
    disassembled.unshift(dateYYYYMMDDFormat)
    return disassembled.join(`/`)
  }

  // Reassemble
  return disassembled.join(`/`)
}

let createSlug = (node, sourceInstanceName, defaultPath) => {
  let baseSlug = createBaseSlug(node, sourceInstanceName, defaultPath);
  return `/${sourceInstanceName}/${baseSlug}`
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(node.parent)
    const sourceInstanceName = parent.sourceInstanceName

    // Create a field on this node for the "collection" of the parent
    createNodeField({
      node,
      name: `collection`,
      value: sourceInstanceName
    })

    let slug = createSlug(node, sourceInstanceName, createFilePath({ node, getNode }))
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  const config = {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
      }),
    ],
  };
  if (stage === 'build-html') {
    config.module = {
      rules: [
        {
          test: require.resolve('jquery/dist/jquery.min.js'),
          use: loaders.null(),
        },
        {
          test: require.resolve('bootstrap/dist/js/bootstrap.bundle.js'),
          use: loaders.null(),
        },
      ],
    };
  }
  actions.setWebpackConfig(config);
};
