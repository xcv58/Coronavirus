import React from "react"
import SEO from "./seo"
import Websites from "./Websites"
import ProgressBar from "react-scroll-progress-bar"
import Nav from "./Nav"
import "antd/dist/antd.css"
import "./styles.css"
import { BackTop } from "antd"
import useToggleWebsite from "./useToggleWebsite"

export default () => {
  const toggleWebsite = useToggleWebsite()
  return (
    <>
      <ProgressBar />
      <SEO />
      <Nav {...toggleWebsite} />
      <Websites {...toggleWebsite} />
      <BackTop />
    </>
  )
}
