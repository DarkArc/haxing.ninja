import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Bootstrap from "../../components/bootstrap"
import NavBar from "../../components/nav-bar"
import PrimaryContainer from "../../components/primary-container"
import SEO from "../../components/seo"
import InlineIcon from "../../components/inline-icon"

class AboutMe extends React.Component {
  render() {
    const { data } = this.props
    const content = data.content.edges[0].node
    const photo = data.portrait.childImageSharp

    const github = `https://github.com/DarkArc/`
    const twitter = `https://twitter.com/haxing_ninja`
    const linkedin = `https://www.linkedin.com/in/wyattchilders/`

    return (
      <div>
        <Bootstrap />
        <NavBar />
        <SEO
          title="About me"
          keywords={[`about`]}
        />
        <PrimaryContainer>
          <div className="row mt-3">
            <div className="col-md-9">
              <div className="d-sm-block d-md-none">
                <div className="mx-auto" style={{maxWidth: '255px'}}>
                  <Img className="rounded-circle d-block w-100" fluid={photo.fluid} />
                  <div className="d-flex justify-content-around mt-3 mb-2" style={{fontSize: '2rem'}}>
                    <a href={github}><InlineIcon icon={faGithub} paddingAmt="0px" /></a>
                    <a href={twitter}><InlineIcon icon={faTwitter} paddingAmt="0px" /></a>
                    <a href={linkedin}><InlineIcon icon={faLinkedin} paddingAmt="0px" /></a>
                  </div>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: content.html }} />
            </div>
            <div className="col-md-3 d-none d-md-block">
              <div className="mx-auto" style={{maxWidth: '255px'}}>
                <Img className="rounded-circle d-block w-100" fluid={photo.fluid} />
              </div>
              <ul className="nav flex-column text-center mt-3">
                <li className="nav-item">
                  <a className="nav-link" href={github}>GitHub</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={twitter}>Twitter</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={linkedin}>LinkedIn</a>
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
