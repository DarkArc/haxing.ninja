import React from "react"
import { Link, graphql } from "gatsby"

import Bootstrap from "../../components/bootstrap"
import NavBar from "../../components/nav-bar"
import RawContainer from "../../components/raw-container"
import SEO from "../../components/seo"

class AboutMe extends React.Component {
  render() {
    const { data } = this.props
    const projects = data.allMarkdownRemark.edges

    return (
      <div>
        <Bootstrap />
        <NavBar />
        <SEO
          title="Projects"
          keywords={[`projects`]}
        />
        <RawContainer>
          <div className="row">
          {projects.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div className="col-md-6">
                <div className="card mt-3" style={{minHeight: 'calc(100% - 1em)'}}>
                  <div className="card-body">
                    <h4 className="card-title">{node.frontmatter.title}</h4>
                    <p className="card-text" style={{paddingBottom: '1.5em'}} dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description
                    }} />
                    <Link className="btn btn-link" to={node.fields.slug} style={{position: 'absolute', bottom: 'calc(0px + 1em)'}}>Learn more</Link>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </RawContainer>
      </div>
    )
  }
}

export default AboutMe

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } },
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
