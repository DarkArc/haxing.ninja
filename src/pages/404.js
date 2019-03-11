import React from "react"

import Bootstrap from "../components/bootstrap"
import NavBar from "../components/nav-bar"
import PrimaryContainer from "../components/primary-container"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <Bootstrap />
        <NavBar />
        <SEO title="404: Not Found" />
        <PrimaryContainer>
          <h1>Oh no :(</h1>
          <p>You found a page that no longer exists, or was never created.</p>
        </PrimaryContainer>
      </div>
    )
  }
}

export default NotFoundPage
