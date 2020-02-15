import { createContext } from "react"

export const ZH = "zh"
export const EN = "en"

export const LANG_OPTIONS = [
  { name: "All", value: "/" },
  { name: "中文", value: ZH },
  { name: "English", value: EN },
]

export const LangContext = createContext("/")
