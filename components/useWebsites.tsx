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
    isChinese: false,
    supportGoogleTranslate: false,
    name: "Covid Act Now",
    url: "https://covidactnow.org/",
  },
  {
    isChinese: false,
    supportGoogleTranslate: false,
    name: "91-DIVOC",
    url: "https://91-divoc.com/pages/covid-visualization/",
  },
  {
    isChinese: false,
    supportGoogleTranslate: false,
    name: "COVID-19 Projections",
    url: "https://covid19.healthdata.org/united-states-of-america",
  },
  {
    isChinese: false,
    supportGoogleTranslate: false,
    name: "LA Times",
    url:
      "https://www.latimes.com/projects/california-coronavirus-cases-tracking-outbreak/",
  },
  {
    isChinese: false,
    supportGoogleTranslate: true,
    name: "BNO",
    url: "https://bnonews.com/index.php/2020/01/the-latest-coronavirus-cases/",
  },
  {
    isChinese: true,
    supportGoogleTranslate: false,
    name: "美国疫情",
    url: "https://m.dealmoon.com/guide/934164",
    large: true,
  },
  {
    isChinese: true,
    supportGoogleTranslate: false,
    name: "北美",
    url: "https://coronavirus.1point3acres.com/",
  },
  {
    isChinese: false,
    supportGoogleTranslate: false,
    name: "Tracker",
    url:
      "https://www.google.com/maps/d/embed?mid=1a04iBi41DznkMaQRnICO40ktROfnMfMx",
  },
  {
    isChinese: false,
    supportGoogleTranslate: false,
    name: "JHU",
    url:
      "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6",
    large: true,
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
    return WEBSITES.filter((website) => !website.isChinese).map((website) => {
      const url = getRenderUrl({ ...website, lang })
      return { ...website, url }
    })
  }
  return WEBSITES
}

export default useWebsites
