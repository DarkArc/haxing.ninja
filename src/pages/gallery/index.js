import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Bootstrap from "../../components/bootstrap"
import NavBar from "../../components/nav-bar"
import RawContainer from "../../components/raw-container"
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
        <RawContainer>
          <div className="row mb-3">
          {images.map(({ node }) => {
            return (
              <div className="col-lg-4 mt-3">
                <a href={node.childImageSharp.fluid.originalImg} target="_blank" rel="noopener noreferrer">
                  <Img fluid={node.childImageSharp.fluid} />
                </a>
              </div>
            )
          })}
          </div>
        </RawContainer>
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
