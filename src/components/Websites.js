import React from "react"
import "./styles.css"
import Website from "./Website"

const websites = [
  { isChinese: true, supportGoogleTranslate: true, name: "腾讯新闻", url: "https://news.qq.com/zt2020/page/feiyan.htm", },
  { isChinese: true, supportGoogleTranslate: true, name: "梅斯", url: "https://m.medsci.cn/wh.asp", },
  { isChinese: true, supportGoogleTranslate: true, name: "肺炎疫情新增明细", url: "https://yiqing.limou.cc", },
  { isChinese: true, supportGoogleTranslate: false, name: "丁香园", url: "https://3g.dxy.cn/newh5/view/pneumonia", },
  { isChinese: true, supportGoogleTranslate: false, name: "凤凰新闻", url: "https://news.ifeng.com/c/special/7tPlDSzDgVk", },
  { isChinese: true, supportGoogleTranslate: false, name: "搜狗搜索", url: "https://sa.sogou.com/new-weball/page/sgs/epidemic", },
  { isChinese: false, supportGoogleTranslate: true, name: 'BNO', url: 'https://bnonews.com/index.php/2020/01/the-latest-coronavirus-cases/', },
  { isChinese: false, supportGoogleTranslate: false, name: "JHU", url: "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6", className: "wide-website", },
  { isChinese: true, supportGoogleTranslate: false, name: "百度", url: "https://voice.baidu.com/act/newpneumonia/newpneumonia", },
  { isChinese: true, supportGoogleTranslate: false, name: "人民日报", url: "https://activity.peopleapp.com/broadcast/", },
]

export default () => {
  const iframes = websites.map(website => (
    <Website key={website.name} {...website} />
  ))
  return <div className="container">{iframes}</div>
}
