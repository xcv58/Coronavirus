import { createContext } from "react"

export const ZH = "zh"
export const EN = "en"

export const LANG_OPTIONS = [
  { name: "English", value: EN },
  { name: "中文", value: ZH },
]

export const LangContext = createContext(ZH)
