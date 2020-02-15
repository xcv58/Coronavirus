import React, { useState, useEffect } from "react"
import Iframe from "react-iframe"
import { Skeleton, Button, Collapse, Col, Divider } from "antd"
import classNames from "classnames"
import { Website } from "./useWebsites"
import WebsiteTitle from "./WebsiteTitle"

const WebsiteComp = ({ loading, url }: any) => {
  const className = "iframe"
  const [isPending, setPending] = useState(false)
  useEffect(() => {
    if (loading) {
      setPending(true)
      setTimeout(() => setPending(false), 640)
    }
  }, [loading])
  const loadingIndicator = (isPending || loading) && (
    <div className={className}>
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
    </div>
  )
  return (
    <>
      {loadingIndicator}
      {!loading && (
        <Iframe
          url={url}
          width="100%"
          className={classNames(className, {
            hide: isPending,
          })}
          loading="auto"
        />
      )}
    </>
  )
}

export default (
  props: Website & { isHidden: boolean; toggleWebsite: Function }
) => {
  const { name, large, isHidden, toggleWebsite, url } = props
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
  const title = <WebsiteTitle {...props} />
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
          extra={
            !isHidden && (
              <>
                <Button
                  icon="reload"
                  loading={loading}
                  disabled={loading}
                  onClick={e => {
                    e.stopPropagation()
                    setTimeout(() => setLoading(false), 10)
                    setLoading(true)
                  }}
                />
                <Divider type="vertical" />
              </>
            )
          }
        >
          {!isHidden && <WebsiteComp {...{ loading, url }} />}
        </Collapse.Panel>
      </Collapse>
    </Col>
  )
}
