import { ZH, EN } from "./useLang"
import useLang from "./useLang"

export type Website = {
  isChinese: boolean
  supportGoogleTranslate: boolean
  large?: boolean
  name: string
  url: string
}

const WEBSITES: Website[] = [
  {
    isChinese: true,
    supportGoogleTranslate: true,
    name: "腾讯新闻",
    url: "https://news.qq.com/zt2020/page/feiyan.htm",
  },
  {
    isChinese: true,
    supportGoogleTranslate: false,
    name: "疫情晴雨表",
    url: "http://vis.pku.edu.cn/ncov/barometer/",
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

const TRANSLATE_URL_PREFIX =
  "https://translate.google.com/translate?hl=en&sl=zh-CN&tl=en&u="

const getRenderUrl = ({
  url,
  isChinese,
  supportGoogleTranslate,
  lang,
}: Website & { lang: string }) => {
  if (!isChinese) {
    return url
  }
  switch (lang) {
    case EN:
      if (!supportGoogleTranslate) {
        return ""
      }
      return `${TRANSLATE_URL_PREFIX}${url}`
    default:
  }
  return url
}

const useWebsites = () => {
  const lang = useLang()
  if (lang === ZH) {
    return WEBSITES.filter(({ isChinese }) => isChinese)
  }
  if (lang === EN) {
    return WEBSITES.filter(
      website => !website.isChinese || website.supportGoogleTranslate
    ).map(website => {
      const url = getRenderUrl({ ...website, lang })
      return { ...website, url }
    })
  }
  return WEBSITES
}

export default useWebsites
