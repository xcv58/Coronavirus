import React, { useState, useEffect } from "react"
import Iframe from "react-iframe"
import {
  ReloadOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
} from "@ant-design/icons"
import { Skeleton, Button, Collapse, Col, Divider } from "antd"
import classNames from "classnames"
import { Website } from "./useWebsites"
import WebsiteTitle from "./WebsiteTitle"

const FULLSCREEN_STYLE = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: "auto",
  width: "100vw",
  maxWidth: "100vw",
  flexBasis: "100vw",
  height: "100vh",
  zIndex: 999,
}

const getFullscreenStyle = (isFullscreen: boolean) =>
  isFullscreen ? FULLSCREEN_STYLE : {}

const WebsiteComp = ({
  loading,
  name,
  url,
  isFullscreen,
}: Website & { loading: boolean; isFullscreen: boolean }) => {
  const className = "iframe"
  const [isPending, setPending] = useState(false)
  useEffect(() => {
    if (loading) {
      setPending(true)
      setTimeout(() => setPending(false), 640)
    }
  }, [loading])
  const loadingIndicator = (isPending || loading) && (
    <div
      className={classNames(className)}
      style={{
        height: FULLSCREEN_STYLE.height,
        background: 'white'
      }}
    >
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
          title={name}
          url={url}
          width="100%"
          className={classNames(className, {
            hide: isPending,
            "iframe-fullscreen": isFullscreen,
          })}
          loading="lazy"
        />
      )}
    </>
  )
}

export default (
  props: Website & { isHidden: boolean; toggleWebsite: Function }
) => {
  const { name, large, isHidden, toggleWebsite, url, isChinese } = props
  const [loading, setLoading] = useState(false)
  const [isFullscreen, setFullscreen] = useState(false)
  if (!url) {
    return null
  }
  const factor = large ? 2 : 1
  const span = {
    xs: 24,
    md: factor * 12,
    xl: factor * 6,
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
      lang={isChinese ? "zh" : "en"}
    >
      <Collapse
        activeKey={isHidden ? "" : name}
        expandIconPosition="right"
        bordered={false}
        destroyInactivePanel
        onChange={targets => {
          if (targets.length <= 0 && isFullscreen) {
            setFullscreen(false)
          }
          toggleWebsite(name)
        }}
      >
        <Collapse.Panel
          style={getFullscreenStyle(isFullscreen)}
          key={name}
          header={title}
          extra={
            !isHidden && (
              <>
                <Button
                  icon={<ReloadOutlined />}
                  loading={loading}
                  disabled={loading}
                  onClick={e => {
                    e.stopPropagation()
                    setTimeout(() => setLoading(false), 10)
                    setLoading(true)
                  }}
                />
                <Button
                  icon={
                    isFullscreen ? (
                      <FullscreenExitOutlined />
                    ) : (
                      <FullscreenOutlined />
                    )
                  }
                  onClick={e => {
                    e.stopPropagation()
                    setFullscreen(!isFullscreen)
                  }}
                />
                <Divider type="vertical" />
              </>
            )
          }
        >
          {!isHidden && (
            <WebsiteComp {...props} {...{ loading, isFullscreen }} />
          )}
        </Collapse.Panel>
      </Collapse>
    </Col>
  )
}
