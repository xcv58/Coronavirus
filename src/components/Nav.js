import React, { useContext } from "react"
import { LangContext, ZH, LANG_OPTIONS } from "./LangContext"
import { navigate } from "gatsby"
import { Select, Button, Divider } from "antd"
import { WEBSITES } from "./Websites"

const { Option } = Select

export default props => {
  const { hiddenSet, showAll, hideAll } = props
  const lang = useContext(LangContext)
  const isAllCollapsed = hiddenSet.size === WEBSITES.length
  return (
    <div className="nav">
      <Select
        defaultValue={lang}
        dropdownMatchSelectWidth={false}
        onChange={value => {
          navigate(value === ZH ? "/" : value)
        }}
      >
        {LANG_OPTIONS.map(({ value, name }) => (
          <Option key={value} value={value}>
            {name}
          </Option>
        ))}
      </Select>{" "}
      🌐
      <Divider type="vertical" />
      <Button
        icon={isAllCollapsed ? "right" : "down"}
        onClick={() => {
          if (isAllCollapsed) {
            showAll()
          } else {
            hideAll(WEBSITES.map(x => x.name))
          }
        }}
      />
    </div>
  )
}
