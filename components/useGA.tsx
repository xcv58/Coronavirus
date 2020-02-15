import ReactGA from "react-ga"
import { useEffect } from "react"

ReactGA.initialize(process.env.GA_TRACKING_ID || "")

const useGA = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
}

export default useGA
