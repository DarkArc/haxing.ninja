import React from "react"

import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

config.autoAddCss = false

class InlineIcon extends React.Component {
  render() {
    return (
        <span style={{paddingRight: '.25em'}}>
          <FontAwesomeIcon icon={ this.props.icon } style={{width: '1em', height: '1em', verticalAlign: '-0.125em'}} />
        </span>
    );
  }
}

export default InlineIcon
