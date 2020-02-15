import React from "react"
import Head from "next/head"
import { AppProps } from "next/app"
import "antd/dist/antd.css"
import "../components/styles.css"

export default ({ Component, pageProps }: AppProps) => {
  const title = "实时疫情信息聚合"
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={title} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
