import React, { useEffect } from "react"
import App from "../components/App"
import { useRouter } from "next/router"
import { ZH } from "../components/useLang"

export default () => {
  const router = useRouter()
  useEffect(() => {
    router.replace({ pathname: "/", query: { lang: ZH } })
  }, [])
  return <App />
}
