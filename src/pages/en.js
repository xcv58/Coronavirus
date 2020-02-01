import React from "react"
import App from "../components/App"
import { LangContext, EN } from "../components/LangContext"

export default () => (
  <LangContext.Provider value={EN}>
    <App />
  </LangContext.Provider>
)
