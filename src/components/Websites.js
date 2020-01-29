import React from "react"
import Iframe from "react-iframe"
import "./styles.css"

const websites = [
  { name: "丁香园", url: "https://3g.dxy.cn/newh5/view/pneumonia" },
  { name: "腾讯新闻", url: "https://news.qq.com/zt2020/page/feiyan.htm" },
  {
    name: "百度",
    url: "https://voice.baidu.com/act/newpneumonia/newpneumonia",
  },
  { name: "人民日报", url: "https://activity.peopleapp.com/broadcast/" },
  {
    name: "搜狗搜索",
    url: "https://sa.sogou.com/new-weball/page/sgs/epidemic",
  },
  { name: "梅斯", url: "https://m.medsci.cn/wh.asp" },
  {
    name: "Johns Hopkins University",
    url:
      "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6",
    className: "wide-website",
  },
]

export default () => {
  const iframes = websites.map(({ name, url, className = "website" }) => (
    <div key={url} className={className}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
      <Iframe url={url} width="100%" className="iframe" />
    </div>
  ))
  return <div className="container">{iframes}</div>
}
