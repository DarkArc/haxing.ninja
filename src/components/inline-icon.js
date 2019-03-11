import React from "react"

class InlineIcon extends React.Component {
  render() {
    let className = `oi oi-${this.props.iconName}`;
    return <span className={className} aria-hidden="true" style={{paddingRight: '.25em'}} />;
  }
}

export default InlineIcon
