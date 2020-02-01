import React, { useContext } from "react"
import Iframe from "react-iframe"
import "./styles.css"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { LangContext, EN } from "./LangContext"
import { Divider } from "antd"

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
  if (!url) {
    return null
  }
  return (
    <div className={className}>
      <Divider>
        <OutboundLink href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </OutboundLink>
      </Divider>
      <Iframe url={url} width="100%" className="iframe" loading="lazy" />
      <hr />
    </div>
  )
}
