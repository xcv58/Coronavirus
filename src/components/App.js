import React from "react"
import SEO from "./seo"
import Websites from "./Websites"
import ProgressBar from "react-scroll-progress-bar"
import Nav from "./Nav"

export default () => (
  <>
    <ProgressBar />
    <SEO />
    <Nav />
    <Websites />
  </>
)
