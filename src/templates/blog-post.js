import React from "react"
import { graphql } from "gatsby"

import { DiscussionEmbed } from 'disqus-react';
import { faClock } from '@fortawesome/free-solid-svg-icons'

import Bootstrap from "../components/bootstrap"
import NavBar from "../components/nav-bar"
import PrimaryContainer from "../components/primary-container"
import SEO from "../components/seo"
import InlineIcon from "../components/inline-icon"

import "./blog-post.css"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    const disqusShortname = `haxingninja`
    const disqusConfig = {
      url: post.frontmatter.slug,
      identifier: post.frontmatter.slug,
      title: post.frontmatter.title,
    }

    return (
      <div>
        <Bootstrap />
        <NavBar />
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <PrimaryContainer>
          <h2>{post.frontmatter.title}</h2>
          <h6 className="mb-2 text-muted" style={{ borderBottom: '1px solid rgba(0, 0, 0, .1)' }}>
          <InlineIcon icon={faClock} />{post.frontmatter.date}
          </h6>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </PrimaryContainer>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
