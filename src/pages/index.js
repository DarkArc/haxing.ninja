import React from "react"
import { Link, graphql } from "gatsby"

import { faClock } from '@fortawesome/free-solid-svg-icons'

import Bootstrap from "../components/bootstrap"
import NavBar from "../components/nav-bar"
import PrimaryContainer from "../components/primary-container"
import SEO from "../components/seo"
import InlineIcon from "../components/inline-icon"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <div>
        <Bootstrap />
        <NavBar />
        <SEO
          title="Blog"
          keywords={[`blog`]}
        />
        <PrimaryContainer>
        {posts.map(({ node }) => {
          return (
            <div className="card mt-3" key={node.fields.slug}>
              <div className="card-body">
                <h4 className="card-title">{node.frontmatter.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                <InlineIcon icon={faClock} />{node.frontmatter.date}
                </h6>
                <p className="card-text"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt
                  }}
                />
                <Link className="btn btn-link" to={node.fields.slug}>Read more</Link>
              </div>
            </div>
          )
        })}
        </PrimaryContainer>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "posts" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
