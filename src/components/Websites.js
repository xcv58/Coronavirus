import React, { useContext } from "react"
import { Row } from "antd"
import Website from "./Website"
import { LangContext, ZH } from "./LangContext"

export const WEBSITES = [
  {
    isChinese: true,
    supportGoogleTranslate: true,
    name: "腾讯新闻",
    url: "https://news.qq.com/zt2020/page/feiyan.htm",
  },
  {
    isChinese: true,
    supportGoogleTranslate: true,
    name: "疫情新增明细",
    url: "https://yiqing.limou.cc",
  },
  {
    isChinese: true,
    supportGoogleTranslate: false,
    name: "丁香园",
    url: "https://3g.dxy.cn/newh5/view/pneumonia",
  },
  {
    isChinese: true,
    supportGoogleTranslate: false,
    name: "凤凰新闻",
    url: "https://news.ifeng.com/c/special/7tPlDSzDgVk",
  },
  {
    isChinese: false,
    supportGoogleTranslate: true,
    name: "BNO",
    url: "https://bnonews.com/index.php/2020/01/the-latest-coronavirus-cases/",
  },
  {
    isChinese: false,
    supportGoogleTranslate: false,
    name: "JHU",
    url:
      "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6",
    large: true,
  },
  {
    isChinese: true,
    supportGoogleTranslate: false,
    name: "搜狗搜索",
    url: "https://sa.sogou.com/new-weball/page/sgs/epidemic",
  },
  {
    isChinese: true,
    supportGoogleTranslate: false,
    name: "百度",
    url: "https://voice.baidu.com/act/newpneumonia/newpneumonia",
  },
  {
    isChinese: true,
    supportGoogleTranslate: false,
    name: "新浪",
    url: "https://news.sina.cn/zt_d/yiqing0121",
  },
  {
    isChinese: true,
    supportGoogleTranslate: false,
    name: "人民日报",
    url: "https://activity.peopleapp.com/broadcast/",
  },
]

const getWebsites = lang => {
  if (lang === ZH) {
    return WEBSITES.filter(({ isChinese }) => isChinese)
  }
  return WEBSITES
}

export default props => {
  const lang = useContext(LangContext)
  const { hiddenSet, toggleWebsite } = props
  const websites = getWebsites(lang)
  const sites = websites.map(website => {
    const isHidden = hiddenSet.has(website.name)
    return (
      <Website
        key={website.name}
        {...website}
        {...{ toggleWebsite, isHidden }}
      />
    )
  })
  return <Row>{sites}</Row>
}
