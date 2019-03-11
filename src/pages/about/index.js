import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Bootstrap from "../../components/bootstrap"
import NavBar from "../../components/nav-bar"
import PrimaryContainer from "../../components/primary-container"
import SEO from "../../components/seo"

class AboutMe extends React.Component {
  render() {
    const { data } = this.props
    const content = data.content.edges[0].node
    const photo = data.portrait.childImageSharp

    return (
      <div>
        <Bootstrap />
        <NavBar />
        <SEO
          title="About Me"
          keywords={[`about`]}
        />
        <PrimaryContainer>
          <div className="row mt-3">
            <div className="col-md-9" dangerouslySetInnerHTML={{ __html: content.html }} />
            <div className="col-md-3">
              <div className="d-none d-sm-block d-md-none pt-3"></div>
              <div className="mx-auto" style={{maxWidth: '255px'}}>
                <Img className="rounded-circle d-block w-100" fluid={photo.fluid} />
              </div>
              <ul className="nav flex-column text-center mt-3">
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/DarkArc/">GitHub</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://twitter.com/haxing_ninja">Twitter</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.linkedin.com/in/wyattchilders/">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </PrimaryContainer>
      </div>
    )
  }
}

export default AboutMe

export const pageQuery = graphql`
  query {
    content: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex : "\/content/markdown-pages/about/"}
      }
    ) {
      edges {
        node {
          html
        }
      }
    }
    portrait: file(relativePath: { eq: "images/photo-of-me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 255, maxHeight: 255, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
