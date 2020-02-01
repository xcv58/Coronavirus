import React, { useContext } from "react"
import { LangContext, ZH, LANG_OPTIONS } from "./LangContext"
import { navigate } from "gatsby"
import { Select } from "antd"

const { Option } = Select

export default () => {
  const lang = useContext(LangContext)
  return (
    <div className="nav">
      <Select
        defaultValue={lang}
        onChange={value => {
          navigate(value === ZH ? "/" : value)
        }}
      >
        {LANG_OPTIONS.map(({ value, name }) => (
          <Option key={value} value={value}>
            {name}
          </Option>
        ))}
      </Select>
    </div>
  )
}
