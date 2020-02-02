import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { Divider, Button } from "antd"

export default props => {
  const { name, url, loading, setLoading } = props
  return (
    <div className="title">
      <OutboundLink href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </OutboundLink>
      <Divider type="vertical" />
      <Button
        icon="reload"
        size="small"
        loading={loading}
        disabled={loading}
        onClick={() => {
          setTimeout(() => setLoading(false), 640)
          setLoading(true)
        }}
      />
    </div>
  )
}
