import React from "react"
import Websites from "./Websites"
import ProgressBar from "react-scroll-progress-bar"
import Nav from "./Nav"
import { BackTop } from "antd"
import useToggleWebsite from "./useToggleWebsite"
import useGA from "./useGA"

export default function App () {
  const toggleWebsite = useToggleWebsite()
  useGA()
  return (
    <>
      <ProgressBar />
      <Nav {...toggleWebsite} />
      <Websites {...toggleWebsite} />
      <BackTop />
    </>
  )
}
