import React from "react"
import { Button } from "antd"
import { Website } from "./useWebsites"

export default (props: Website) => {
  const { name, url } = props
  return (
    <Button
      type="link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      {name}
    </Button>
  )
}
