import { useRouter } from "next/router"

export const ZH = "zh"
export const EN = "en"
export const ALL = "/"

export const LANG_OPTIONS = [
  { name: "All", value: ALL },
  { name: "中文", value: ZH },
  { name: "English", value: EN },
]

const useLang = () => {
  const { query = {} } = useRouter() || {}
  const { lang } = query
  switch (lang) {
    case EN:
    case ZH:
      return lang
    default:
      return ALL
  }
}

export default useLang
