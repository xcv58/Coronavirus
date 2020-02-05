import React, { useContext, useState } from "react"
import Iframe from "react-iframe"
import { LangContext, EN } from "./LangContext"
import { Skeleton, Button, Collapse, Col, Divider } from "antd"
import classNames from "classnames"
import WebsiteTitle from "./WebsiteTitle"

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

const Website = ({ loading, url }) => {
  const className = "iframe"
  if (loading) {
    return (
      <div className={className}>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
    )
  }
  return <Iframe url={url} width="100%" className={className} loading="auto" />
}

export default props => {
  const { name, large, isHidden, toggleWebsite } = props
  const lang = useContext(LangContext)
  const url = getRenderUrl({ ...props, lang })
  const [loading, setLoading] = useState(false)
  if (!url) {
    return null
  }
  const factor = large ? 2 : 1
  const span = {
    sm: factor * 12,
    md: factor * 8,
    lg: factor * 6,
    xxl: factor * 4,
  }
  const title = <WebsiteTitle {...{ name, url, loading, setLoading }} />
  return (
    <Col
      {...span}
      className={classNames({
        website: !large,
        "wide-website": large,
      })}
    >
      <Collapse
        activeKey={isHidden ? "" : name}
        expandIconPosition="right"
        bordered={false}
        destroyInactivePanel
        onChange={() => toggleWebsite(name)}
      >
        <Collapse.Panel
          key={name}
          header={title}
          bordered={false}
          extra={
            !isHidden && (
              <>
                <Button
                  icon="reload"
                  loading={loading}
                  disabled={loading}
                  onClick={e => {
                    e.stopPropagation()
                    setTimeout(() => setLoading(false), 640)
                    setLoading(true)
                  }}
                />
                <Divider type="vertical" />
              </>
            )
          }
        >
          <Website {...{ loading, url }} />
        </Collapse.Panel>
      </Collapse>
    </Col>
  )
}
