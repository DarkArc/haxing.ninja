import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bootstrap from "../../components/bootstrap"
import NavBar from "../../components/nav-bar"
import PrimaryContainer from "../../components/primary-container"
import SEO from "../../components/seo"

class GalleryIndex extends React.Component {
  render() {
    const { data } = this.props
    const images = data.allFile.edges

    return (
      <div>
        <Bootstrap />
        <NavBar />
        <SEO
          title="Gallery"
          keywords={[`gallery`]}
        />
        <PrimaryContainer>
          <div className="row">
          {images.map(({ node }) => {
            return (
              <div className="col-lg-4 mt-3">
                <a href={node.childImageSharp.fluid.originalImg} target="_blank">
                  <Img fluid={node.childImageSharp.fluid} />
                </a>
              </div>
            )
          })}
          </div>
        </PrimaryContainer>
      </div>
    )
  }
}

export default GalleryIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(
      filter: { absolutePath: {regex : "\/content/gallery-photos/"} },
      sort: { fields: [absolutePath], order: DESC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 690, srcSetBreakpoints: [ 250, 690 ]) {
              ...GatsbyImageSharpFluid
              originalImg
            }
          }
        }
      }
    }
  }
`
