import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { Button } from "antd"

export default props => {
  const { name, url } = props
  return (
    <OutboundLink href={url} target="_blank" rel="noopener noreferrer">
      <Button type="link" onClick={e => e.stopPropagation()}>
        {name}
      </Button>
    </OutboundLink>
  )
}
