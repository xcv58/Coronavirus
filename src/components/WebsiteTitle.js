import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { Divider, Button } from "antd"

export default props => {
  const { name, url, loading, setLoading } = props
  return (
    <div className="title">
      <OutboundLink href={url} target="_blank" rel="noopener noreferrer">
        <Button type="link" onClick={e => e.stopPropagation()}>
          {name}
        </Button>
      </OutboundLink>
      <Divider type="vertical" />
      <Button
        icon="reload"
        size="small"
        loading={loading}
        disabled={loading}
        onClick={e => {
          e.stopPropagation()
          setTimeout(() => setLoading(false), 640)
          setLoading(true)
        }}
      />
    </div>
  )
}
