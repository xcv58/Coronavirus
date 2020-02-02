import React, { useContext, useState } from "react"
import Iframe from "react-iframe"
import "./styles.css"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { LangContext, EN } from "./LangContext"
import { Divider, Button, Skeleton } from "antd"

const TRANSLATE_URL_PREFIX =
  "https://translate.google.com/translate?hl=en&sl=zh-CN&tl=en&u="

const getRenderUrl = ({ url, isChinese, supportGoogleTranslate, lang }) => {
  if (!isChinese) {
    return url
  }
  switch (lang) {
    case EN:
      if (!supportGoogleTranslate) {
        return null
      }
      return `${TRANSLATE_URL_PREFIX}${url}`
    default:
  }
  return url
}

export default props => {
  const { name, className = "website" } = props
  const lang = useContext(LangContext)
  const url = getRenderUrl({ ...props, lang })
  const [loading, setLoading] = useState(false)
  if (!url) {
    return null
  }
  const website = (
    <Iframe url={url} width="100%" className="iframe" loading="auto" />
  )
  const skeleton = (
    <div className="iframe">
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
    </div>
  )
  return (
    <div className={className}>
      <Divider>
        <div className="title">
          <OutboundLink href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </OutboundLink>
          <Divider type='vertical' />
          <Button
            icon="reload"
            loading={loading}
            disabled={loading}
            onClick={() => {
              setTimeout(() => setLoading(false), 640)
              setLoading(true)
            }}
          />
        </div>
      </Divider>
      {loading ? skeleton : website}
      <hr />
    </div>
  )
}
