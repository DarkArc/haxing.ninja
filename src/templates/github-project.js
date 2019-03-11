import React from "react"
import { graphql } from "gatsby"

import Bootstrap from "../components/bootstrap"
import NavBar from "../components/nav-bar"
import PrimaryContainer from "../components/primary-container"
import SEO from "../components/seo"

class GithubProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.markdownRemark

    return (
      <div>
        <Bootstrap />
        <NavBar />
        <SEO
          title={project.frontmatter.title}
          description={project.frontmatter.description}
        />
        <PrimaryContainer>
          <h1>{project.frontmatter.title}</h1>
          <div className="row">
            <div className="col-md-9"
              dangerouslySetInnerHTML={{ __html: project.html }}
            />
            <div className="col-md-3">
              <a className="btn btn-primary btn-lg btn-block" href={project.frontmatter.github_url} role="button">Visit Project Site</a>
              <a className="btn btn-default btn-lg btn-block" href={project.frontmatter.github_url + '/issues' } role="button">Report a Problem</a>
            </div>
          </div>
        </PrimaryContainer>
      </div>
    )
  }
}

export default GithubProjectTemplate

export const pageQuery = graphql`
  query GithubProjectBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        github_url
      }
    }
  }
`
