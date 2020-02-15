import React from "react"
import App from "../components/App"
import { LangContext, ZH } from "../components/LangContext"

export default () => (
  <LangContext.Provider value={ZH}>
    <App />
  </LangContext.Provider>
)
