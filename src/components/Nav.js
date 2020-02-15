import React, { useContext } from "react"
import { LangContext, LANG_OPTIONS } from "./LangContext"
import { Link } from "gatsby"
import { Button, Divider, Radio } from "antd"
import useWebsites from "./useWebsites"

export default props => {
  const websites = useWebsites()
  const { hiddenSet, showAll, hideAll } = props
  const lang = useContext(LangContext)
  const isAllCollapsed = hiddenSet.size === websites.length
  return (
    <div className="nav">
      <Radio.Group defaultValue={lang} buttonStyle="outline">
        {LANG_OPTIONS.map(({ name, value }) => (
          <Radio.Button key={name} value={value}>
            <Link to={value}>{name}</Link>
          </Radio.Button>
        ))}
      </Radio.Group>
      <Divider type="vertical" />
      <Button
        icon={isAllCollapsed ? "right" : "down"}
        onClick={() => {
          if (isAllCollapsed) {
            showAll()
          } else {
            hideAll(websites.map(x => x.name))
          }
        }}
      />
    </div>
  )
}
