import React from "react"
import SEO from "./seo"
import Websites from "./Websites"
import ProgressBar from "react-scroll-progress-bar"
import Nav from "./Nav"
import "antd/dist/antd.css"
import { BackTop } from "antd"

export default () => (
  <>
    <ProgressBar />
    <SEO />
    <Nav />
    <Websites />
    <BackTop />
  </>
)
