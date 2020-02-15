import React from "react"
import { LANG_OPTIONS, ALL } from "./useLang"
import { Button, Divider, Radio } from "antd"
import useWebsites from "./useWebsites"
import Link from "next/link"
import useLang from "./useLang"

export default (props: any) => {
  const websites = useWebsites()
  const { hiddenSet, showAll, hideAll } = props
  const lang = useLang()
  const isAllCollapsed =
    websites.filter(x => !hiddenSet.has(x.name)).length === 0
  return (
    <nav>
      <Radio.Group value={lang} buttonStyle="outline">
        {LANG_OPTIONS.map(({ name, value }) => (
          <Radio.Button key={name} value={value}>
            <Link
              href={{
                pathname: "/",
                query: value === ALL ? {} : { lang: value },
              }}
            >
              <a>{name}</a>
            </Link>
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
    </nav>
  )
}
