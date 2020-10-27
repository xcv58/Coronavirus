import React from "react"
import { Row } from "antd"
import Website from "./Website"
import useWebsites from "./useWebsites"

const Websites = (props: any) => {
  const { hiddenSet, toggleWebsite } = props
  const websites = useWebsites()
  const sites = websites.map((website) => {
    const isHidden = hiddenSet.has(website.name)
    return (
      <Website
        key={website.name}
        {...website}
        {...{ toggleWebsite, isHidden }}
      />
    )
  })
  return (
    <main className="main">
      <Row>{sites}</Row>
    </main>
  )
}

export default Websites
