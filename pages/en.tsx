import React, { useEffect } from "react"
import App from "../components/App"
import { EN } from "../components/useLang"
import { useRouter } from "next/router"

export default () => {
  const router = useRouter()
  useEffect(() => {
    router.replace({ pathname: "/", query: { lang: EN } })
  }, [])
  return <App />
}
